import {resolve as resolvePath} from "path";
import {readFileSync as readFile} from "fs";
import * as HTTPS from "https";
import * as Express from "express";
import * as Twig from "twig";
import * as CORS from "cors";
import * as BodyParser from "body-parser";
import config from "./lib/config";

const app = Express();

const start = new Promise(async resolve => {
	if (config.hasReverseProxy) app.set("trust proxy", 1);

	//Register render engine
	app.set("view engine", "twig");
	app.set("views", resolvePath(__dirname, "..", "views"));
	app.set("view cache", false);
	Twig.cache(false);

	//Inject default render variables
	app.locals= {
		baseUrl: config.baseURL,
		apiUrl: config.apiURL,
		...app.locals,
	};
	//Register express middleware
	app.use(Express.static(resolvePath(__dirname, "..", "public")));
	app.use((req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
		return CORS({
			origin: req.get("origin"),
			credentials: true
		})(req, res, next);
	});
	app.use(require("helmet")());
	app.use(BodyParser.urlencoded({extended: true}));
	app.use(BodyParser.json());

	//Register routes
	app.use("/", await import("./routes"));

	//Register error handlers
	app.use((req: Express.Request, res: Express.Response) => {
		console.error("Missing URL: \"" + req.url + "\"");
		res.status(404);
		if (req.accepts("json")) res.send({error: "Not found"});
		else res.type("txt").send("Not found");
	});

	//Start web server
	const options: GenericObject = {};
	if (process.env.NODE_ENV === "development") {
		options.key = readFile(resolvePath(__dirname, "..", "local", "server.key"));
		options.cert = readFile(resolvePath(__dirname, "..", "local", "server.cert"));
	}
	HTTPS.createServer(options, app).listen(config.port, resolve);
});

start.then(() => {
	console.log(`Server started on port ${config.port} (${config.baseURL})`);
});
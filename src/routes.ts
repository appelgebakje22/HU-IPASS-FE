import {Router, Request, Response} from "express";

const router = Router();

//Index pages
router.get("/", (req: Request, res: Response) => res.render("index"));

//User pages
router.get("/user", (req: Request, res: Response) => res.render("user/info"));
router.get("/user/login", (req: Request, res: Response) => res.render("user/login"));
router.get("/user/register", (req: Request, res: Response) => res.render("user/register"));

//FileSystem pages
router.get("/fs", (req: Request, res: Response) => res.render("fs/index"))
router.get("/fs/create", (req: Request, res: Response) => res.render("fs/create"))

//Directory pages
router.get("/directory/:directoryId", (req: Request, res: Response) => res.render("directory/index", {directoryId: req.params["directoryId"]}))
router.get("/directory/:directoryId/create", (req: Request, res: Response) => res.render("directory/create", {directoryId: req.params["directoryId"]}))

export = router;
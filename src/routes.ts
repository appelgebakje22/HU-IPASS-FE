import {Router, Request, Response} from "express";

const router = Router();

//Index pages
router.get("/", (req: Request, res: Response) => res.render("index"));

//User pages
router.get("/user/login", (req: Request, res: Response) => res.render("user/login"));
router.get("/user/register", (req: Request, res: Response) => res.render("user/register"));

export = router;
import { Router } from "express";
import taskRouter from "./taskRouter.js";

const router = new Router()

router.use('/task', taskRouter)

export default router
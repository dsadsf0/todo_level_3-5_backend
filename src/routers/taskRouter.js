import { Router } from "express";
import taskController from "../controllers/taskController.js";

const taskRouter = new Router()

taskRouter.get('/', taskController.getAll)
taskRouter.get('/:id', taskController.getById)
taskRouter.post('/', taskController.create)
taskRouter.put('/:id', taskController.editById)
taskRouter.delete('/:id', taskController.deleteById)

export default taskRouter
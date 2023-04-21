import taskService from "../services/taskService.js";
import { Task } from "../models/models.js";

class TaskController {

  async getAll(req, res) {
    try {
      const tasks = await taskService.getAll()
      return res.json(tasks)
    } catch (error) {
      console.log(error);
      return res.status(500).json(error)
    }
  }

  async getById(req, res) {
    try {
      const task = await taskService.getById(req.params.id)
      return res.json(task)
    } catch (error) {
      console.log(error);
      return res.status(500).json(error)
    }
  }

  async create(req, res) {
    try {
      const {title, description, due_date} = req.body
      const task = await taskService.create({title, description, due_date})
      return res.json(task)
    } catch (error) {
      console.log(error);
      return res.status(500).json(error)
    }
  }

  async editById(req, res) {
    try {
      const {title, description, due_date, completed_at} = req.body
      const id = req.params.id
      const editedTask = await taskService.editById({ title, description, due_date, completed_at }, id)
      return res.json(editedTask)
    } catch (error) {
      console.log(error);
      return res.status(500).json(error)
    }
  }

  async deleteById(req, res) {
    try {
      const task = await taskService.deleteById(req.params.id)
      return res.json(task)
    } catch (error) {
      console.log(error);
      return res.status(500).json(error)
    }
  }
}

export default new TaskController()
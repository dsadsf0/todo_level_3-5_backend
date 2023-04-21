import {Task} from '../models/models.js'

class TaskService {
  async getAll() {
    const tasks = []
    const limit = 200
    let offset = 0
    let task = [];
    
    do {
      task = await Task.findAll({
          limit,
          offset
        })
        offset += limit
        tasks.push(...task)
    } while (task.length === limit);
    
    return tasks;
  }

  async getById(id) {
    if (!id) throw new Error('Need id')
    const task = await Task.findOne({ where: {
      id
    }})
    return task
  }

  async create({title, description, due_date}) {
    if (!title || !description || !due_date) throw new Error('Invalid data')
    const task = await Task.create({title, description, due_date})
    return task
  }

  async editById(task, id) {
    if (!id) throw new Error('Need id')
    const updatedTask = await Task.findOne({where: {id}})
      .then(res => 
        res.update(
          { ...task },
          {
            returning: true,
            plain: true
          }
      )
    )

    return updatedTask
  }

  async deleteById(id) {
    if (!id) throw new Error('Need id')
    const task = await Task.destroy({
      where: {
        id
      }
    })
    
    return task
  }
}

export default new TaskService()
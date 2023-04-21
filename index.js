import env from 'dotenv'
env.config()
import express from 'express'
import cors from 'cors'
import { sequalize } from './db.js'
import { Task } from './src/models/models.js'
import router from './src/routers/index.js'

const app = express()

app.use(express.json())
app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true,
}))

app.use('/api', router)

const PORT = process.env.PORT || 3001

async function startApp() {
  try {
    await sequalize.authenticate();
    await sequalize.sync();

    app.listen(PORT, () => { console.log(`SERVER START ON PORT: ${PORT}`); })
  } catch (error) {
    console.log(error)
  }
}

startApp()
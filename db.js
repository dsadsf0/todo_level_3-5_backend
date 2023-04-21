import env from 'dotenv'
env.config()
import Sequalize from 'sequelize'

export const sequalize = new Sequalize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  }
)

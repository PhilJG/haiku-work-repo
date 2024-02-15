import { Router } from 'express'
const router = Router()
import db from './db.js'

let userId = 4

router.get('./users', async (req, res) => {
  try {
    const { rows } = await db.await(`SELECT * FROM users WHERE id = 1`)
    console.log(rows)
    res.json(rows)
  } catch (err) {
    console.error(err.message)
    res.json(err)
  }
})

export default router

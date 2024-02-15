import express from 'express'
import userRoutes from './userRoutes.js'

const app = express()

app.use(userRoutes)

app.listen(4100, () => {
  console.log('Airbnb API ready on localhost:4100')
})

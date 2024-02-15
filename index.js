import express from 'express'
const app = express()

import userRoutes from './userRoutes.js'

app.use(userRoutes)

app.listen(4100, () => {
  console.log('Airbnb API ready on localhost:4100')
})

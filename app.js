const config = require('./utils/config') //calls dotenv to setup env vars first
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const logger = require('./utils/logger')
require("express-async-errors")

const middleware = require('./utils/middleware')
const blogsRouter = require('./controllers/blogs')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')

logger.info('connecting to', config.MONGODB_URI)

mongoose
  .connect(config.MONGODB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false, 
    useCreateIndex: true 
  })
  .then(() => {
    logger.info('connected to MongoDB')
    server.Ping();
  })
  .catch(error => {
    logger.error('error connection to MongoDB:', error.message)
  })

//
app.use(middleware.tokenExtractor)
//cors middleware.
app.use(cors())
//middleware built-in for express to show static content
app.use(express.static('build'))
//middleware json parser
app.use(express.json())
//middleware customer requestlogger
app.use(middleware.requestLogger)

app.use('/api/blogs', blogsRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
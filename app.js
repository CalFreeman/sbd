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
<<<<<<< HEAD
  .connect(config.MONGODB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false, 
    useCreateIndex: true 
  })
=======
  .connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
>>>>>>> 3ce890de7012863fa6f5330f565c26ffad56b1d8
  .then(() => {
    logger.info('connected to MongoDB')
    server.Ping();
  })
  .catch(error => {
    console.log('MONGODB_URI:', process.env.MONGODB_URI);
    console.log('PORT:', process.env.PORT);
    logger.error('error connection to MongoDB:', error.message, ';' ,error.info)
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
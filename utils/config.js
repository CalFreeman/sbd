//dotenv module to load env vars. 
//if (process.env.NODE_ENV !== 'production') {
//    require('dotenv').config()
//}
require('dotenv').config()

//env vars are passed in from .env file at the root utilizing dotenv module
const PORT = process.env.PORT
const MONGODB_URI = process.env.NODE_ENV === 'test' 
  ? process.env.TEST_MONGODB_URI
  : process.env.MONGODB_URI

module.exports = {
  MONGODB_URI,
  PORT
}
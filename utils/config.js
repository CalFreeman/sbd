<<<<<<< HEAD
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

=======
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
  
let PORT = process.env.PORT
let MONGODB_URI = process.env.MONGODB_URI
  
//Set URI based on env #.env
MONGODB_URI = process.env.NODE_ENV === 'test' 
  ? process.env.TEST_MONGODB_URI
  : process.env.MONGODB_URI
  
>>>>>>> 3ce890de7012863fa6f5330f565c26ffad56b1d8
module.exports = {
  MONGODB_URI,
  PORT
}
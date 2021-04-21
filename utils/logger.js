//info for printing normal log messages
const info = (...params) => {
    if (process.env.NODE_ENV !== 'test') {
      console.log(...params)
    }
}

//errors for all error messages
const error = (...params) => {
    console.error(...params)
}
  
module.exports = {
    info,
    error
}
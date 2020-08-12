const info = (...params) => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(params.join(' '))
  }
}

const error = (...params) => {
  console.log(...params)
}

module.exports = {
  info, error
}
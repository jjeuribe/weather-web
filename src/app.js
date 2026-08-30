const express = require('express')
const app = express()

app.get('/', (request, response) => {
  response.send('Hola Mundo')
})

module.exports = app

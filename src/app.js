const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// View engine configuration
const viewsPath = path.join(__dirname, 'views', 'templates')
const partialsPath = path.join(__dirname, 'views', 'partials')
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Static assets configuration
const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

app.get('/', (request, response) => {
  response.render('index', {
    title: 'Weather'
  })
})

app.use((request, response) => {
  response.render('404', {
    title: '404',
    errorMessage: 'Page Not Found'
  })
})

module.exports = app

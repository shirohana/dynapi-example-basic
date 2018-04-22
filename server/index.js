const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const dynapi = require('dynapi')
const express = require('express')
const session = require('express-session')

const production = (process.env.NODE_ENV === 'production')
const assetsFile = path.join(__dirname, '../dist/assets.js')

if (production) {
  if (!fs.existsSync(assetsFile)) {
    console.error('> You must run `npm build` before starting production mode')
    process.exit(1)
  }
} else {
  fs.writeFileSync(assetsFile, '')
  const webpack = require('../build/webpack.js')
  webpack.watch(assetsFile)

  // Remove assets file on exit
  process.on('exit', function () {
    if (fs.existsSync(assetsFile)) {
      fs.unlinkSync(assetsFile)
    }
  })

  const exitEvents = ['SIGINT', 'SIGUSR1', 'SIGUSE2', 'uncaughtException']
  exitEvents.forEach(event => process.on(event, process.exit))
}

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || '127.0.0.1'

const app = express()

app.disable('x-powered-by')
app.set('view engine', 'pug')
app.set('views', './assets/pages')

// For ajax from client side
app.use(bodyParser.json())

// Use session to
app.use(session({
  secret: 'nyan-nyan-nyan-nyan',
  resave: false,
  saveUninitialized: false
}))

// Serve static files
app.use('/assets', express.static('dist/static'))

// Listen API files
app.use('/api', dynapi({
  watch: !production,
  router: {
    src: './server',
    entry: './api',
    aliases: [
      { from: 'error', to: './errors' },
      { from: 'model', to: './database/models' }
    ]
  }
}))

// Listen Page files
app.use('/', dynapi({
  watch: !production,
  router: {
    entry: './pages'
  }
}))

app.listen(PORT, HOST, function () {
  console.log(`Server starts listen on ${HOST}:${PORT}`)
})

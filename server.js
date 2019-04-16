const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'

// our next JS app
const app = next({ dev })

// http request handler from next JS
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    // instantiate express
    const server = express()

    // we would have to do something like this for
    // `/galleries` routes
    server.get('/gallery/:id', (req, res) => {
      const actualPage = '/galleryItem'
      const queryParams = { galleryName: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    // have nextJS handle all incoming requests
    server.get('*', (req, res) => {
      return handle(req, res)
    })

    // start the server
    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  })

// Serve your app using HTTPS
const http = require('http')
const app = require('./app')

// Setting up port
const port = process.env.PORT || 5001

// Create server
const server = http.createServer(app)

// Server listen request
server.listen(port, () => {
  console.log(`Listening on http://localhost:${port} 👻`)
})
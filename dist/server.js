
var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')


var app = express()
app.use(require('connect-history-api-fallback')())


app.use(serveStatic(__dirname))

var port = process.env.PORT || 5000

app.listen(port, () => {
  console.log('Server started at http://localhost:5000')
})
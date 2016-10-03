var express = require('express')
var app = express()

app.use(express.static(__dirname + '/images'))
app.use(express.static(__dirname + '/dist'))
app.use(express.static(__dirname + '/node_modules'))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(8080)

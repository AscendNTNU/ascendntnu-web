var express = require('express')
var app = express()
var fs = require('fs')
var mkdirp = require('mkdirp')
var yamljs = require('yamljs')

app.use('/images', express.static(__dirname + '/images'))
app.use('/dist', express.static(__dirname + '/dist'))
app.use('/styles', express.static(__dirname + '/styles'))
app.use('/node_modules', express.static(__dirname + '/node_modules'))

app.listen(8080)

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get('/api/v1', function (req, res) {
  res.sendFile(__dirname + '/api/v1/index.html')
})

app.get('/api/v1/:section', function (req, res) {
  var section = req.params.section
  var validSection = /^[a-z]+$/.test(section)

  var fileName = __dirname + '/api/v1/' + section + '.json'

  if (validSection && fileExists(fileName)) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    res.sendFile(fileName)
  } else
    res.sendFile(__dirname + '/api/v1/index.html')
})

app.get('/api/v1/:section/:year', function (req, res) {
  var year = req.params.year
  var validYear = /^20[0-9]{2}$/.test(year)

  var section = req.params.section
  var validSection = /^[a-z]+$/.test(section)

  var fileName = __dirname + '/api/v1/' + year + '/' + section + '.json'

  if (validSection && validYear && fileExists(fileName)) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    res.sendFile(fileName)
  } else
    res.sendFile(__dirname + '/api/v1/index.html')
})

var years = [2016, 2017]
var groups = {
  'sponsors': {},
  'members': {}
}

var data = []
var fileName = ''
var dirName = ''
var dataFormatted = ''

years.forEach(year => {
  dirName = 'api/v1/' + year

  for (var group in groups) {
    data = []
    fileName = 'data/' + group + '.' + year + '.yml'

    if (fileExists(fileName))
      data = yamljs.load(fileName)

    dataFormatted = JSON.stringify(data, null, 2)
    mkdirp.sync(dirName)
    fs.writeFile(dirName + '/' + group + '.json', dataFormatted, err => {
      if (err) throw err
    })

    groups[group][year] = data
  }
})

dirName = 'api/v1'

for (var group in groups) {
  dataFormatted = JSON.stringify(groups[group], null, 2)
  fs.writeFile(dirName + '/' + group + '.json', dataFormatted, err => {
    if (err) throw err
  })
}

function fileExists (filePath) {
  try {
    var exists = fs.statSync(filePath)
    return true
  } catch (err) {
    return false
  }
}

var express = require('express')
var app = express()
var fs = require('fs')
var mkdirp = require('mkdirp')
var yamljs = require('yamljs')
var fm = require('front-matter')
var constants = require('./constants')

app.use('/images', express.static(__dirname + '/images'))
app.use('/public/assets', express.static(__dirname + '/images/assets'))
app.use('/publications', express.static(__dirname + '/images/assets/publications'))
app.use('/dist', express.static(__dirname + '/dist'))
app.use('/styles', express.static(__dirname + '/styles'))
app.use('/node_modules', express.static(__dirname + '/node_modules'))

app.listen(process.env.PORT_OUT || constants.port || 8080)

app.get('/api/v1', function (req, res) {
  res.sendFile(__dirname + '/api/v1/index.html')
})

app.get('/api/v1/posts', function (req, res) {
  var files = fs.readdirSync('./posts')
    .filter(file => /\.md$|\.markdown$/.test(file))
    .map(slugify)

  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.send(JSON.stringify(files, null, 2))
})

function slugify (fileName) {
  return fileName
    .toLowerCase()
    //.replace(/^[0-9]{2,4}-[0-9]{1,2}-[0-9]{1,2}-/, '')
    .replace(/\.md$|\.markdown$/, '')
}

function pascalCase (str) {
  return str.split(' ').map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
}

function digits (value, places = 2) {
  return (Array(places).join('0') + value).slice(-places)
}

app.get('/api/v1/posts/all', function (req, res) {
  var files = fs.readdirSync('./posts')
    .filter(file => /\.md$|\.markdown$/.test(file))
    .map(postName => {
    var pathToPost = __dirname + '/posts/' + postName
    var element = {}
    if (fileExists(pathToPost))
      element = fm(fs.readFileSync(pathToPost) + '')
    element['file'] = postName
    element['link'] = slugify(postName)
    return element
  })

  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.send(JSON.stringify(files, null, 2))
})

app.get('/api/v1/cv/:key?/:file?', function (req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8')

  if (!req.params.key) {
    res.send(JSON.stringify({ error: 'Missing key' }, null, 2))
    return false
  }

  if (constants.access.indexOf(req.params.key) === -1) {
    res.send(JSON.stringify({ error: 'Key do not match any' }, null, 2))
    return false
  }

  if (req.params.file && /^\d+--[a-z\-øæå]+--[a-z]+--\d\d?--[a-z]+--[a-z0-9\-]+\.[a-z0-9]+$/.test(req.params.file)) {
    var files = fs.readdirSync(constants.pathToCV).filter(file => file === req.params.file)

    if (files.length) {
      var info = files[0].split(/--|\./)
      var newName = `${info[2]}--${info[3]}--${info[4]}--${info[5]}.${info[info.length - 1]}`
      res.download(__dirname + '/' + constants.pathToCV + '/' + files[0], newName)
    } else {
      res.send('Could not find file.')
    }

    return false
  }

  if (constants.pathToCV) {
    var files = fs.readdirSync(constants.pathToCV)
      .filter(file => /^\d+--[a-z\-øæå]+--[a-z]+--\d\d?--[a-z]+--[a-z0-9\-]+\.[a-z0-9]+$/.test(file.toLowerCase()))
      .map(postName => {
      var info = postName.split(/--|\./)
      var date = new Date(parseInt(info[0]))
      var dateFormatted = `${date.getFullYear()}-${digits(date.getMonth())}-${digits(date.getDate())} ${digits(date.getHours())}:${digits(date.getMinutes())}:${digits(date.getSeconds())}`
      var name = info[2].split('-')
      var description = fs.readdirSync(constants.pathToCV)
        .filter(f => new RegExp(`description--${info[6]}[a-z0-9\-]*.txt`).test(f))
        .map(descFile => {
        return fs.readFileSync(constants.pathToCV + '/' + descFile, 'utf-8')
      }) + ''

      return {
        date: dateFormatted,
        first_name: pascalCase(name.shift()),
        last_name: pascalCase(name.pop()),
        middle_name: pascalCase(name ? name.join(' ') : ''),
        study: info[3].toUpperCase(),
        year: parseInt(info[4]),
        group: info[5].toLowerCase(),
        description: description,
        cv: postName
      }
    })

    res.send(JSON.stringify({ students: files }, null, 2))
  } else {
    res.send('Backend issue. No path to CV specified.')
  }
})

app.get('/api/v1/posts/:post', function (req, res) {
  var postName = req.params.post
  var files = fs.readdirSync('./posts')
    .filter(file => new RegExp(postName, 'i').test(file))
  var pathToPost = __dirname + '/posts/' + (files[0] || '')

  res.setHeader('Content-Type', 'application/json; charset=utf-8')

  if (fileExists(pathToPost) && files.length) {
    var postData = fm(fs.readFileSync(pathToPost) + '')
    postData['file'] = files[0]
    postData['link'] = slugify(files[0])
    res.send(JSON.stringify(postData, null, 2))
  } else
    res.send('Could not find post.')
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
  'history': {},
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

app.get('/blog/:post', function (req, res) {
  var post = req.params.post

  var files = fs.readdirSync('./posts')
    .filter(file => new RegExp(post, 'i').test(file))
  var pathToPost = __dirname + '/posts/' + (files[0] || '')

  if (fileExists(pathToPost) && files.length) {
    var postData = fm(fs.readFileSync(pathToPost) + '')
    var link = slugify(files[0])
    var title = postData.attributes.title
    var d = postData.attributes.date
    var date = `${d.getFullYear()}-${digits(d.getMonth())}-${digits(d.getDate())} ${digits(d.getHours())}:${digits(d.getMinutes())}:${digits(d.getSeconds())}`
    var image = 'https://ascendntnu.no/images/logo/logo.png'
    if (postData.attributes.image) {
      if (/^http/.test(postData.attributes.image))
        image = postData.attributes.image
      else
        image = 'https://ascendntnu.no' + postData.attributes.image
    }
    var desc = postData.body.slice(0, 320)

    res.send(prerender(req, {
      title: title,
      desc: desc,
      date: date,
      image: image
    }))
  } else {
    res.sendFile(__dirname + '/index.html')
  }
})

app.get('/*', function (req, res) {
  var pieces = req.originalUrl.split(/\//)
  switch (pieces[1]) {
    case 'blog':
      res.send(prerender(req, {
        title: 'Blog',
        desc: 'Read the Ascend NTNU blog and get the newest updates from the group.'
      }))
      break
    case 'drones':
      res.send(prerender(req, {
        title: 'Drones',
        desc: 'Ascend NTNU makes a new drone every year. Here you can view them all.'
      }))
      break
    case 'join':
      res.send(prerender(req, {
        title: 'Join',
        desc: 'Want to join our team? Send a mail or sign up for upcoming opportunities.'
      }))
      break
    case 'sponsors':
      res.send(prerender(req, {
        title: 'Sponsors',
        desc: 'This is the sponsor page. If you want to support Ascend NTNU we are happy to have you as sponsors.'
      }))
      break
    case 'about':
      res.send(prerender(req, {
        title: 'About',
      }))
      break
    case 'missions':
      res.send(prerender(req, {
        title: 'Missions',
        desc: 'Our main purpose is to solve a missions which was created in 2014. It may be impossble to solve it today, but as tech grows we may be able to solve the mission tomorrow.'
      }))
      break
    case 'team':
      res.send(prerender(req, {
        title: 'Team',
        desc: 'Our team has 28 members divided into 5 main groups. You can ream more about the groups here...'
      }))
      break
    case 'contact':
      res.send(prerender(req, {
        title: 'Contact',
        desc: 'Want to contact us? Feel free to send us a mail and we will contact you back.'
      }))
      break
  }

  res.sendFile(__dirname + '/index.html')
})

function prerender (req, data) {
  data.title = data.title || 'Home'
  data.desc = data.desc || `Autonomus aerial robotics. Ascend NTNU is The Norwegian University of Science and Technology's team in the International Aerial Robotics Competition (IARC).`
  data.image = data.image || '/images/logo/logo.png'
  data.link = data.link || req.protocol + '://' + req.get('host') + req.originalUrl
  data.date = data.date || ''

  return `<!doctype html>
<html>
  <head>
    <title>Ascend NTNU - ${data.title}</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimal-ui" />
    <meta name="description" content="${data.desc}" />
    <meta name="keywords" content="Ascend, NTNU, robotics, autonomus, team, IARC, international, aerial, robotics, competition, AI" />
    <meta name="author" content="Ascend NTNU" />
    <meta property="fb:app_id" content="202744680073731" />
    ${data.date ? `<meta property="og:date" content="${data.date}" />` : ''}
    <meta property="og:type" content="article" />
    <meta property="og:image" content="${data.image}" />
    <meta property="og:title" content="Ascend NTNU - ${data.title}" />
    <meta property="og:description" content="${data.desc}" />
    <meta property="og:url" content="${data.link}" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css" />
    <link rel="shortcut icon" href="/images/logo/logo.png" />
    <link rel="stylesheet" href="/node_modules/katex/dist/katex.min.css" />
    <link rel="stylesheet" href="/styles/main.css" />
    <script defer src="/node_modules/react/dist/react.js"></script>
    <script defer src="/node_modules/react-dom/dist/react-dom.js"></script>
    <script defer src="/dist/bundle.js"></script>
  </head>
  <body>
    <div id="app" class="app-container"></div>
    <div id="fb-root"></div>
    <script>
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/nb_NO/sdk.js#xfbml=1&version=v2.8&appId=202744680073731";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, "script", "facebook-jssdk"));
    </script>
  </body>
</html>`
}

var express = require('express')
var app = express()
var fs = require('fs')
var mkdirp = require('mkdirp')
var yamljs = require('yamljs')
var fm = require('front-matter')
var commonmark = require('commonmark')
var reader = new commonmark.Parser()
var writer = new commonmark.HtmlRenderer()

var constants = require('./constants')

app.use('/images', express.static(__dirname + '/images'))
app.use('/public/assets', express.static(__dirname + '/images/assets'))
app.use('/publications', express.static(__dirname + '/images/assets/publications'))
app.use('/dist', express.static(__dirname + '/dist'))
app.use('/sitemap.xml', express.static(__dirname + '/images/web/sitemap.xml'))
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

  var public = !req.params.key || req.params.key === 'public'
  var error = null

  if (!public && constants.access.indexOf(req.params.key) === -1) {
    error = 'Key do not match any'
    public = true
  }

  if (req.params.file && /[a-z\-øæå]--[a-zøæå0-9]+--\d\d?--[a-z]+\.[a-z0-9]+$/.test(req.params.file.toLowerCase())) {
    var find = req.params.file.split(/\./)[0].replace(/[^a-zøæå0-9\-]+/ig, '')
    var re = public
      ? new RegExp('--pub--' + find)
      : new RegExp(find)
    var files = fs.readdirSync(constants.pathToCV).filter(file => re.test(file))

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
    var re = public
      ? /^\d+--pub--[a-z\-øæå]+--[a-zøæå0-9]+--\d\d?--[a-z]+--/
      : /^\d+--p[ubriv]+--[a-z\-øæå]+--[a-zøæå0-9]+--\d\d?--[a-z]+--/
    var files = fs.readdirSync(constants.pathToCV)
      .filter(file => re.test(file.toLowerCase()))
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
      var cv = `${info[2]}--${info[3]}--${info[4]}--${info[5]}.${info[info.length - 1]}`

      return {
        date: dateFormatted,
        first_name: pascalCase(name.shift()),
        last_name: pascalCase(name.pop()),
        middle_name: pascalCase(name ? name.join(' ') : ''),
        study: info[3].toUpperCase(),
        year: parseInt(info[4]),
        group: info[5].toLowerCase(),
        description: description,
        cv: cv
      }
    })

    res.send(JSON.stringify({ students: files, error: error }, null, 2))
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

app.get('/blog/amp/:post', function (req, res) {
  var post = req.params.post

  var files = fs.readdirSync('./posts')
    .filter(file => new RegExp(post, 'i').test(file))
  var pathToPost = __dirname + '/posts/' + (files[0] || '')

  if (fileExists(pathToPost) && files.length) {
    var postData = fm(fs.readFileSync(pathToPost) + '')
    postData.link = slugify(files[0])

    res.send(createAmpArticle(postData))
  } else {
    res.sendFile(__dirname + '/index.html')
  }
})

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
      image: image,
      metatags: `<link rel="amphtml" href="https://ascendntnu.no/blog/amp/${link}">`
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
  data.metatags = data.metatags || ''

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
    <meta name="google-site-verification" content="8BRTGtX6p1hMedISBUbbwoyCQKG-yAi_lfQwP6ZG0PU" />${data.metatags}
    <link rel="alternate" hreflang="en" href="https://ascendntnu.no" />
    <link rel="alternate" hreflang="no" href="https://ascendntnu.no" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css" />
    <link rel="shortcut icon" href="/images/logo/logo.png" />
    <link rel="stylesheet" href="/node_modules/katex/dist/katex.min.css" />
    <link rel="stylesheet" href="/styles/main.css" />
    <script defer src="/node_modules/react/dist/react.js"></script>
    <script defer src="/node_modules/react-dom/dist/react-dom.js"></script>
    <script defer src="/dist/bundle.js"></script>
    <script type="application/ld+json">
    {
      "@context": "http://schema.org/",
      "@type": "Organization",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Trondheim, Norway",
        "postalCode": "7034",
        "streetAddress": "O.S. Bragstads plass 2 A/B"
      },
      "description": "${data.desc}",
      "email": "hi(at)ascendntnu.no",
      "foundingLocation": {
      	"@type": "Place",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 63.4183894,
          "longitude": 10.401931
        }
      },
      "image": "https://ascendntnu.no${data.image}",
      "logo": "https://ascendntnu.no/images/logo/logo.png",
      "name": "Ascend NTNU",
      "memberOf": {
        "@type": "Organization",
        "name": "NTNU",
        "url": "https://ntnu.no"
      },
      "sameAs": [
        "https://twitter.com/ascendntnu",
        "https://instagram.com/ascendntnu",
        "https://www.facebook.com/ascendntnu",
        "https://github.com/ascendntnu",
        "https://www.linkedin.com/company/ascend-ntnu"
      ],
      "sponsor": {
        "@type": "Organization",
        "name": "Kongsberg",
        "image": "https://kongsberg.com/images/kog2017/kongsberg-logo.png",
        "url": "https://kongsberg.com/"
      },
      "url": "https://ascendntnu.no"
    }
    </script>
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

function createAmpArticle (data) {
  data.title = data.title || 'Home'
  data.desc = data.desc || `Autonomus aerial robotics. Ascend NTNU is The Norwegian University of Science and Technology's team in the International Aerial Robotics Competition (IARC).`
  data.image = data.image || '/images/logo/logo.png'
  data.link = data.link || ''
  var parsed = reader.parse(data.body)
  var result = writer.render(parsed)
  result = result
    .replace(/<img /g, '<amp-img width="640" height="480" layout="responsive" ')
    .replace(/<\/img>/g, '</amp-img>')
    .replace(/<video /g, '<amp-video ')
    .replace(/<\/video>/g, '</amp-video>')
    .replace(/<iframe /g, '<amp-iframe ')
    .replace(/<\/iframe>/g, '</amp-iframe>')

  return `<!doctype html>
<html amp lang="en">
  <head>
    <meta charset="utf-8">
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <title>${data.attributes.title}</title>
    <link rel="canonical" href="https://ascendntnu.no/blog/${data.link}" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans|Questrial|Roboto+Slab" />
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <script async custom-element="amp-social-share" src="https://cdn.ampproject.org/v0/amp-social-share-0.1.js"></script>
    <script type="application/ld+json">
      {
        "@context": "http://schema.org",
        "@type": "BlogPosting",
        "about": "${data.body.slice(0, 320)}",
        "articleBody": "${result}",
        "author": {
          "@type": "Person",
          "name": "${data.attributes.author || 'Ascend NTNU'}"
        },
        "dateCreated": "${data.attributes.date}",
        "datePublished": "${data.attributes.date}",
        "genre": "technology",
        "headline": "${data.attributes.title}",
        "image": [
          "${data.attributes.image || '/images/ascend-logo-social.jpg'}"
        ],
        "thumbnailUrl": "${data.attributes.image || '/images/ascend-logo-social.jpg'}"
      }
    </script>
    <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
    <style amp-custom>
      body {
        font-family: 'Open Sans', sans-serif;
        background-color: #444;
        color: #ddd;
      }
      article {
        padding: 16px;
        margin: auto;
        max-width: 720px;
      }
      a {
        color: #f80;
        cursor: pointer;
        text-decoration: none;
        border-bottom: 1px dashed #f80;
      }
      .img-float-right + img, .img-float-right + figure {
        float: right;
        margin: 8px 0 16px 16px;
      }
      .img-float-left + img, .img-float-left + figure {
        float: left;
        margin: 8px 16px 16px 0;
      }
      img, iframe {
        display: block;
        margin: auto;
        clear: both;
      }
      img {
        max-width: 100%;
        max-height: 240px;
      }
    </style>
  </head>
  <body>
    <article>
    <h1>${data.attributes.title}</h1>
    <amp-social-share type="facebook" data-param-url="https://ascendntnu.no/blog/${data.link}" data-param-app_id="202744680073731"></amp-social-share>
    <amp-social-share type="twitter" data-param-url="https://ascendntnu.no/blog/${data.link}"></amp-social-share>
    <amp-social-share type="linkedin" data-param-url="https://ascendntnu.no/blog/${data.link}"> </amp-social-share>
    <amp-social-share type="email" data-param-url="https://ascendntnu.no/blog/${data.link}"></amp-social-share>
    ${result}
    </article>
  </body>
</html>`
}

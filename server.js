
var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())
app.use('/', express.static('./'))

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(8080, function () {
  console.log('CORS-enabled web server listening on port 80')
})


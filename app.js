var http = require('http')

const url = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid={}'

var server = http.createServer(function (request, response) {
  var requestM = require('request')
  requestM(url, function (err, res, body) {
    if (err) {
      throw err
    }
    var data = JSON.parse(body)
    response.write('<h1>' + 'City name:' + data.name + '<br>' + '</h1>')
    response.write('<h2>' + 'Temp:' + data.main.temp + '<br>' + '</h2>')
    response.write('<h2>' + 'Sunset at:' + new Date(data.sys.sunset * 1000) + '<br>' + '</h2>')
    response.end()
  })
})

server.listen(3000)

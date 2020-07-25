let http = require('http');
let fs = require('fs');
http.createServer(function (req, res) {
  console.log(fs.readFileSync('pokedex/Word%20Frequency%20copy/WordCount.html', 'utf-8'));
  res.end();
}).listen(8080);
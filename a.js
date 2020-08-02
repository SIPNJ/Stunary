const http = require("http");
const fs = require("fs");
http.createServer((req, res) => {
  let url = req.url;
  console.log(url);
  switch (url) {
    case "home":
      fs.readFile("./index.html", (err, data) => {
        res.write(data);
        res.end();
      });
      break;
  }
}).listen(9090,"127.0.0.1",()=>{
    console.log("http://127.0.0.1:9090");
});

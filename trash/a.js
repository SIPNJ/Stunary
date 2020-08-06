const http = require("http");
const fs = require("fs");
const port = 8080;
const host = "localhost";
const url = require("url");
http
  .createServer((request, response) => {
    let pathname = url.parse(request.url, true).pathname;
    let filename = "." + pathname;
    let a = /\/login/gi;
    let query = null;
    if (pathname.match(a)) {
      query = new URL(request.url, `http://${request.headers.host}`).searchParams;
      // console.log(query)
      pathname = "/login";
    }
    if (pathname == "/") {
      // ORIGIN - INDEX.HTML
      fs.readFile("./index.html", "utf-8", (err, data) => {
        if (err) {
          console.log(err);
          response.end(JSON.stringify({ message: "Do not have file !" }));
        } else {
          response.writeHead(200, { "Content-Type": "text/html" });
          response.write(data);
          response.end();
        }
      });
    } else if (pathname.includes(`.html`) == true) {
      // HOME
      fs.readFile(filename, "utf-8", (err, data) => {
        if (err) {
          console.log(err);
          response.end(JSON.stringify({ message: "Do not have file !" }));
        } else {
          response.writeHead(200, { "Content-Type": "text/html" });
          response.write(data);
          response.end();
        }
      });
    } else if (pathname.includes(`.css`) == true) {
      // CASCADING STYLE SHEET
      fs.readFile(filename, "utf-8", (err, data) => {
        if (err) {
          console.log(err);
          response.end(JSON.stringify({ message: "Do not have file !" }));
        } else {
          response.writeHead(200, { "Content-Type": "text/css" });
          response.write(data);
          response.end();
        }
      });
    } else if (pathname.includes(`.js`) == true) {
      // JAVASCRIPT
      fs.readFile(filename, "utf-8", (err, data) => {
        if (err) {
          console.log(err);
          response.end(JSON.stringify({ message: "Do not have file !" }));
        } else {
          response.writeHead(200, { "Content-Type": "text/js" });
          response.write(data);
          response.end();
        }
      });
    } else if (pathname.includes(`/login`) == true) {
      if (query == "") {
        response.end(
          JSON.stringify({
            message: "You doesn't provide username and password",
          })
        );
      } else {
        console.log(query.get("username"));
        console.log(query.get("password"));
        let usrn = "son";
        let pass = "1234";
        if (query.get("username") === usrn && query.get("password") == pass) {
          response.end(JSON.stringify({ message: "login success" }));
        } else {
          response.end(JSON.stringify({ message: "login fail" }));
        }
      }
    } else {
      console.log(`${url} is not served`);
      response.end(JSON.stringify({ message: `${url} is not served` }));
    }
  })
  .listen(8080, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
  });

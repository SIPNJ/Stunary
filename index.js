// const mypackage = require("/pokedex/mypackage");
const fs = require("fs");
const http = require("http");
const url = require("url");
const path = require("path");
const host = "localhost";
const port = 31415;

function onRequest(request, response) {
  let pathname = url.parse(request.url, true).pathname;
  let filename = "." + pathname;
  let query;
  let username;
  let password;
  if (pathname.match(/\/login/gi)) {
    query = new URL(request.url, `http://${request.headers.host}`);
    pathname = "/login";
    username = query.searchParams.get("username");
    password = query.searchParams.get("password");
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
  } else if (pathname.includes(`.png`) == true) {
    // IMAGES - PNG
    fs.readFile(filename, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        response.end(JSON.stringify({ message: "Do not have file !" }));
      } else {
        response.writeHead(200, { "Content-Type": "image/png" });
        response.write(data);
        response.end();
      }
    });
  } else if (
    pathname.includes(`.jpg`) == true ||
    pathname.includes(`.jpeg`) == true
  ) {
    // IMAGES - JPG - JPEG
    fs.readFile(filename, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        response.end(JSON.stringify({ message: "Do not have file !" }));
      } else {
        response.writeHead(200, { "Content-Type": "image/jpeg" });
        response.write(data);
        response.end();
      }
    });
  } else if (pathname.includes(`/login`) == true) {
    // LOG IN
    if (username == "" || password == "") {
      console.log("good");
      response.end(JSON.stringify({ message: "You should not leave blank !" }));
    } else {
      let maindata = JSON.parse(
        fs.readFileSync("SignIn/JS/ispass.json", "utf-8")
      );
      console.log(maindata);
      for (let i = 0; i < maindata.length; i++) {
        if (username == maindata[i].name && password == maindata[i].password) {
          console.log("good");
          return response.end(JSON.stringify({ message: "Login Success" }));
        }
      }
      return response.end(JSON.stringify({ message: "Login Fail" }));
    }
  } else {
    response.end(
      JSON.stringify({ message: `Do not have file at ${filename} !` })
    );
  }
}
const server = http.createServer(onRequest);
server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}/`);
});

// function onRequest(request, response) {
//   let pathname = url.parse(request.url).pathname;
//   let parentFolder = path.dirname(pathname);
//   console.log(parentFolder);
//   // Head of HTML
//   fs.readFile(pathname, function (err, data) {
//     if (err) {
//       response.writeHead(404);
//     } else {
//       let HeadDataOfHTML = data.split("</head>")[0];
//       response.writeHead(200, { "Content-Type": "text/html" });
//       response.write(HeadDataOfHTML);
//     }
//   });
//   // CSS
//   fs.readdir(parentFolder + "/CSS", function (err, files) {
//     if (err) {
//       console.log(err);
//     } else {
//       for (let i = 0; i < files.length; i++) {
//         fs.readFile(files[i], function (err, data) {
//           if (err) {
//             let CSSdata = `\n`;
//             response.writeHead(404);
//             response.write(CSSdata);
//           } else {
//             let CSSdata = `\n<style>${data}</style>\n`;
//             response.writeHead(200, { "Content-Type": "text/css" });
//             response.write(CSSdata);
//           }
//         });
//       }
//     }
//   });
//   // Body of HTML
//   fs.readFile(pathname, function (err, data) {
//     if (err) {
//       response.writeHead(404);
//     } else {
//       let BodyDataOfHTML =
//         `\n</head>` + data.split("</head>")[1].split("</body>")[0];
//       response.writeHead(200, { "Content-Type": "text/html" });
//       response.write(BodyDataOfHTML);
//     }
//   });
//   // JS
//   fs.readdir(parentFolder + "/JS", function (err, files) {
//     if (err) {
//       console.log(err);
//     } else {
//       for (let i = 0; i < files.length; i++) {
//         fs.readFile(files[i], function (err, data) {
//           if (err) {
//             let JSdata = `\n`;
//             response.writeHead(404);
//             response.write(JSdata);
//           } else {
//             let JSdata = `\n<script>${data}</script>\n`;
//             response.writeHead(200, { "Content-Type": "text/js" });
//             response.write(JSdata);
//           }
//         });
//       }
//     }
//   });
//   // Foot of HTML
//   fs.readFile(pathname, function (err, data) {
//     if (err) {
//       response.writeHead(404);
//     } else {
//       let FootDataOfHTML = data.split("</head>")[1].split("</body>")[1];
//       response.writeHead(200, { "Content-Type": "text/html" });
//       response.write(FootDataOfHTML);
//     }
//   });
//   response.end();
// }
// function onRequest(request, response) {
//   console.log(request.url);
//   // Beginning
//   let pathname = checkDomain(url.parse(request.url).pathname);
//   let parentFolder = path.dirname(pathname);
//   // Head of HTML
//   let HeadDataOfHTML = fs.readFileSync(pathname, "utf-8").split("</head>")[0];
//   response.write(HeadDataOfHTML);
//   // CSS
//   function checkCSSExist(parentFolder) {
//     let childrenFolder = fs.readdirSync(parentFolder, "utf-8");
//     for (let i = 0; i < childrenFolder.length; i++) {
//       if (childrenFolder[i] == "CSS") {
//         // writeCSS();
//         let CSSfiles = fs.readdirSync(
//           `${parentFolder}/${childrenFolder[i]}`,
//           "utf-8"
//         );
//         for (let n = 0; n < CSSfiles.length; n++) {
//           let CSSdata = fs.readFileSync(
//             `${parentFolder}/${childrenFolder[i]}/${CSSfiles[n]}`,
//             "utf-8"
//           );
//           response.write(`\n<style>${CSSdata}</style>\n`);
//         }
//       }
//     }
//   }
//   checkCSSExist(parentFolder);
//   // Body of HTML
//   let BodyDataOfHTML = fs.readFileSync(pathname, "utf-8").split("</head>")[1];
//   // BodyDataOfHTML = BodyDataOfHTML.split("</body>")[0];
//   response.write(`\n</head>\n${BodyDataOfHTML}`);
//   // JS
//   function checkJSExist(parentFolder) {
//     let childrenFolder = fs.readdirSync(parentFolder, "utf-8");
//     for (let i = 0; i < childrenFolder.length; i++) {
//       if (childrenFolder[i] == "JS") {
//         let JSfiles = fs.readdirSync(
//           `${parentFolder}/${childrenFolder[i]}`,
//           "utf-8"
//         );
//         for (let n = 0; n < JSfiles.length; n++) {
//           let JSdata = fs.readFileSync(
//             `${parentFolder}/${childrenFolder[i]}/${JSfiles[n]}`,
//             "utf-8"
//           );
//           response.write(`\n<script>${JSdata}</script>\n`);
//         }
//       }
//     }
//   }
//   checkJSExist(parentFolder);
//   // Foot of HTML
//   let FootDataOfHTML = fs.readFileSync(pathname, "utf-8").split("</body>")[1];
//   response.write(`\n</body>\n${FootDataOfHTML}`);
//   // Ending
//   response.end();
// }
// function checkDomain(domain) {
//   let chars = domain.split("");
//   if (chars[0] == "/") {
//     chars.shift();
//     return chars.join("");
//   } else {
//     return domain;
//   }
// }

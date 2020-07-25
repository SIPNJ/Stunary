// const mypackage = require("/pokedex/mypackage");
const fs = require("fs");
const http = require("http");
const url = require("url");
const path = require("path");
function checkDomain(domain) {
  let chars = domain.split("");
  if (chars[0] == "/") {
    chars.shift();
    return chars.join("");
  } else {
    return domain;
  }
}
function onRequest(request, response) {
  // Beginning
  let pathname = checkDomain(url.parse(request.url).pathname);
  let parentFolder = path.dirname(pathname);
  // Head of HTML
  let HeadDataOfHTML = fs.readFileSync(pathname, "utf-8").split("</head>")[0];
  response.write(HeadDataOfHTML);
  // CSS
  function checkCSSExist(parentFolder) {
    let childrenFolder = fs.readdirSync(parentFolder, "utf-8");
    for (let i = 0; i < childrenFolder.length; i++) {
      if (childrenFolder[i] == "CSS") {
        // writeCSS();
        let CSSfiles = fs.readdirSync(
          `${parentFolder}/${childrenFolder[i]}`,
          "utf-8"
        );
        // console.log(CSSfiles);
        for (let n = 0; n < CSSfiles.length; n++) {
          let CSSdata = fs.readFileSync(
            `${parentFolder}/${childrenFolder[i]}/${CSSfiles[n]}`,
            "utf-8"
          );
          response.write(`\n<style>${CSSdata}</style>\n`);
        }
      }
    }
  }
  checkCSSExist(parentFolder);
  // Body of HTML
  let BodyDataOfHTML = fs.readFileSync(pathname, "utf-8").split("</head>")[1];
  // BodyDataOfHTML = BodyDataOfHTML.split("</body>")[0];
  response.write(`\n</head>\n${BodyDataOfHTML}`);
  // JS
  function checkJSExist(parentFolder) {
    let childrenFolder = fs.readdirSync(parentFolder, "utf-8");
    for (let i = 0; i < childrenFolder.length; i++) {
      if (childrenFolder[i] == "JS") {
        let JSfiles = fs.readdirSync(
          `${parentFolder}/${childrenFolder[i]}`,
          "utf-8"
        );
        for (let n = 0; n < JSfiles.length; n++) {
          let JSdata = fs.readFileSync(
            `${parentFolder}/${childrenFolder[i]}/${JSfiles[n]}`,
            "utf-8"
          );
          response.write(`\n<script>${JSdata}</script>\n`);
        }
      }
    }
  }
  checkJSExist(parentFolder);
  // Foot of HTML
  let FootDataOfHTML = fs.readFileSync(pathname, "utf-8").split("</body>")[1];
  response.write(`\n</body>\n${FootDataOfHTML}`);
  // Ending
  response.end();
}

let server = http.createServer(onRequest);
server.listen(31415, "127.0.0.1", () => {
  console.log(`Server is running at http://127.0.0.1:31415/WeatherNow/Weather.html`);
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

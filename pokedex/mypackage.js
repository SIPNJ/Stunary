function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}
function isPrimes(array) {
  let ans = [];
  for (let i = 0; i < array.length; i++) {
    ans.push(isPrime(array[i]));
  }
  return ans;
}
function toNumberfromArray(array) {
  let ans = [];
  for (let i = 0; i < array.length; i++) {
    ans.push(Number(array[i]));
  }
  return ans;
}
module.exports = {
  isPrimes,
};
function onRequest(request, response) {
  let pathname = url.parse(request.url).pathname;
  let parentFolder = path.dirname(pathname);
  console.log(parentFolder);
  // Head of HTML
  let HeadDataOfHTML = fs.readFileSync(pathname).split("</head>")[0];
  response.write(HeadDataOfHTML);
  // CSS
  let CSSfiles = fs.readdirSync(parentFolder + "/CSS");
  for (let i = 0; i < CSSfiles.length; i++) {
    let CSSdata = fs.readFileSync(CSSfiles[i]);
    response.write(`\n<style>${CSSdata}</style>\n`);
  }
  // Body of HTML
  let BodyDataOfHTML = fs
    .readFileSync(pathname)
    .split("</head>")[1]
    .split("</body>")[0];
  response.write(`\n</head>\n<BodyDataOfHTML`);
  // JS
  let JSfiles = fs.readdirSync(parentFolder + "/JS");
  for (let i = 0; i < JSfiles.length; i++) {
    let JSdata = fs.readFileSync(JSfiles[i]);
    response.write(`\n<style>${JSdata}</style>\n`);
  }
  // Foot of HTML
  let FootDataOfHTML = fs
    .readFileSync(pathname)
    .split("</head>")[1]
    .split("</body>")[1];
  response.write(`\n</body>\n${FootDataOfHTML}`);
  // Ending
  response.end();
}

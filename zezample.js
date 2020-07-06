function someP(link) {
  new Promise(function (resolve, reject) {
    if (Math.random() > 0.7) {
      reject(new Error("You have an unlucky day"));
    } else {
      resolve(link);
    }
  })
.then(function (value) {
    return value / 2;
})
.then((value) => {
    if (Math.random() > 0.7) {
      throw new Error("U have an unlucky day");
    } else {
      return value;
    }
});
}

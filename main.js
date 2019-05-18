function test() {
  console.log('beginning');
  const eventsURL = "http://59a11ee1c89deb0011c337d5.mockapi.io/products";
  fetch(eventsURL)
    .then(function (res) {
      return res.json();
    })
    .then(function (products) {
      console.log('middle');
      products.forEach(function(product) {
        let img = new Image();
        img.src = product.url;
        document.body.appendChild(img);
      });
    })
    .catch(err => {
      console.log("error:" + err.message);
    });  

    console.log('end');
};
test();
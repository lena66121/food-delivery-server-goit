const products = require('../../db/products/all-products.json');

const productId = (req, res) => {
     const lastIndex = req.url.lastIndexOf('/') + 1;
     const id = +req.url.slice(lastIndex);
     const foundedProduct = products.filter(prod => prod.id === id);

     let responseObj;

     if (foundedProduct.length !== 0) {
          responseObj = {
               status: "success",
               products: foundedProduct,
          }
     } else {
          responseObj = {
               status: "no products",
               products: [],
          }
     }

     res.writeHead(200, {
          "Content-Type": "text/json"
     });
     res.write(JSON.stringify(responseObj));
     res.end()
}

module.exports = productId;
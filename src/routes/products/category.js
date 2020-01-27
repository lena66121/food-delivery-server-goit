const products = require('../../db/products/all-products.json');
const qs = require("qs");

const productsCategory = (req, res) => {

    const parsedUrl = qs.parse(req.url);
    const findCategory = Object.values(parsedUrl)[0];
    const lastIndex = findCategory.lastIndexOf('"');
    const firstIndex = findCategory.indexOf('"');
    const category = findCategory.slice(firstIndex + 1, lastIndex);

    const arrOfProducts = products.filter(prod => prod.categories[0] === category);

    let responseObj;

    if (arrOfProducts.length !== 0) {
        responseObj = {
            status: "success",
            products: arrOfProducts,
        }
    } else if (arrOfProducts.length === 0) {
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

module.exports = productsCategory;
const products = require('../../db/products/all-products.json');
const qs = require("qs");

const productIds = (req, res) => {

    const ids = qs.parse(req.url);
    const findIds = Object.values(ids)[0];
    const lastIndex = findIds.lastIndexOf("'");
    const firstIndex = findIds.indexOf("'");
    const arrOfIds = findIds.slice(firstIndex + 1, lastIndex).split(',');

    let arrOfProducts = [];

    arrOfIds.map(id => {
        const product = products.find(prod => prod.id === +id);
        if (product) {
            const obj = {
                id: product.id,
                sku: product.sku,
                name: product.name,
                description: product.description,
            }
            arrOfProducts.push(obj);
        }
    })

    let responseObj = {
        status: "success",
        products: arrOfProducts,
    }

    res.writeHead(200, {
        "Content-Type": "text/json"
    });
    res.write(JSON.stringify(responseObj));
    res.end()
}

module.exports = productIds;
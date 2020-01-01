const fs = require('fs');

const productsRoute = (req, res) => {
    const file = fs.readFileSync('./src/db/products/all-products.json');
    res.writeHead(200, {
        'Content-Type': 'text/json'
    });
    res.write(file);
    res.end();
}

module.exports = productsRoute;
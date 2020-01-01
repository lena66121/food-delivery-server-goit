const fs = require('fs');

const productsRoute = (req, res) => {
    if (req.method === 'GET') {
        const file = fs.readFileSync('./src/db/products/all-products.json');
        res.writeHead(200, {
            'Content-Type': 'text/json'
        });
        res.write(file);
        res.end();
    } else {
        res.writeHead(405, {
            "Content-Type": "text/html"
        });
        res.write("<h1>405 Method Not Allowed</h1>");
        res.end();
    }

}

module.exports = productsRoute;
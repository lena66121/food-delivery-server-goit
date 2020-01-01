const fs = require('fs');
const path = require('path');


const signUpRoute = (req, res) => {

    if (req.method === 'POST') {
        let body = '';
        req.on('data', (data) => {
            body = body + data.toString();
            const writeStream = fs.createWriteStream('../food-delivery-server-goit/src/db/users' + `/${JSON.parse(body).username}.json`);
            writeStream.write(body);
            writeStream.end();
        })

        req.on('end', () => {
            res.writeHead(200, {
                'Content-Type': 'text/json'
            });
            res.write(
                `{
                "status": "success", 
                "user": ${body},
               }`
            );
            res.end();
        });
    }
  };

  module.exports = signUpRoute;
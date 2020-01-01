const http = require('http');
const url = require('url');

const router = require('./routes/router');
const morgan = require('morgan');
const logger = morgan('combined');

const port = 3000;

const startServer = () => {

    const server = http.createServer((req, res) => {

        const parsedUrl = url.parse(req.url);
        const func = router[parsedUrl.pathname] || router.default;
        logger(req, res, () => func(req, res));

    });

    server.listen(port, (err) => {
        if (err) throw err;
        console.log("Listening on 3000");
    })

}

module.exports = startServer;
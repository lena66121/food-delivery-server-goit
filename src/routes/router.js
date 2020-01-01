const productsRoute = require('./products/productsRoute');
const notFoundRoute = require('./notFound/404');
const signUpRoute = require('./users/signUpRoute');

const router = {
  '/signup': signUpRoute,
  '/products': productsRoute,
  default: notFoundRoute,
};

module.exports = router;
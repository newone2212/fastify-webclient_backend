const accountRoutes = require('./youtuberoutes');

async function routes(fastify, options) {
  fastify.register(accountRoutes, { prefix: '/Youtube' });
}

module.exports = routes;
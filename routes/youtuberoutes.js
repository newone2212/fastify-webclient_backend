const control = require('../controllers/controller');

async function routes(fastify, options) {
  fastify.post('/Channel',control.Influencer.getChannelDetails);
  fastify.post('/Vedio',control.Influencer.getVedioDetails);
  fastify.post('/Playlist',control.Influencer.getPlaylistDetailDetails);
  // Add more routes as needed
}

module.exports = routes;

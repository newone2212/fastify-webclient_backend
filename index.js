const fastify = require('fastify');
const cors = require('@fastify/cors');
const bodyParser = require('@fastify/formbody');
const routes = require('./routes/index.route');
const PORT = process.env.PORT || 8080;
const app = fastify();
const { connect }=require("./db/conn");
require("dotenv").config();
require("./db/conn");


// Enable CORS
app.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
});

// Enable Body Parser
app.register(bodyParser);




// Register routes
app.register(routes,{ prefix: '/api' })

// Start the server
app.listen({
  port: PORT,
  
}, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is running on ${address}`);
});



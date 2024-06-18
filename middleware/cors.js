const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: 'GET,POST,PUT,DELETE',
  credentials: true
};

module.exports = cors(corsOptions);

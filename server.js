require('dotenv').config();
const express = require('express');
const testRoutes = require('./routes/testRoutes');
const corsMiddleware = require('./middleware/cors');
const headersMiddleware = require('./middleware/headers');

const app = express();
const port = process.env.PORT || 3001;

// Middleware to parse JSON requests
app.use(express.json());

// Custom headers middleware
app.use(headersMiddleware);

// CORS Middleware
app.use(corsMiddleware);

// Use the test routes
app.use('/api', testRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
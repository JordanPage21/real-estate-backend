require('dotenv').config();
const express = require('express');
const testRoutes = require('./routes/testRoutes');

const app = express();
const port = process.env.PORT;

// Middleware to parse JSON requests
app.use(express.json());

// Use the test routes
app.use('/api', testRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to the Express server!');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const cors = require('cors');
const cookieSession = require('cookie-session');
const Sequelize = require('sequelize');
const config = require('./config/config.json');

const app = express();

// Middlewares for the app
app.use(express.json());
app.use(cors());

// Sequelize configuration
const sequelize = new Sequelize(config.development); 

// Checking the connection with the database
sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to the database');
    return sequelize.sync();
    
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
  });

// Set server to run on port 8080
const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

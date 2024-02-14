const express = require('express');
const cors = require('cors');
const cookieSession = require('cookie-session');
const Sequelize = require('sequelize');
const config = require('./config/config.json');
const routes=require('./routes');
const db = require('./models');

const app = express();
// Middlewares for the app
app.use(express.json());  
app.use(cors());
app.use("/user", routes);



// Set server to run on port 8080
const port = 8080;
db.sequelize.sync().then(() => {
  app.listen(port, () => {
      console.log('Server is running on port 3000');
  });
});
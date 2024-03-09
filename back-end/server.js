const express = require('express');
const cors = require('cors');
const cookieSession = require('cookie-parser');
const routes=require('./routes');
const db = require('./models');
let controllScraper=require('./controllers/scraperController');

const app = express();
// Middlewares for the app
app.use(express.json());  
app.use(cors());
app.use(cookieSession());

app.use("/user", routes);



// Set server to run on port 8080
const port = 8080;
db.sequelize.sync().then(() => {
  app.listen(port, () => {
      console.log('Server is running on port 8080');
      controllScraper.scrapeDataKeels();
  });
});
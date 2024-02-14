const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

exports.signUp = function (req, res) {
  console.log('Received user data:', req.body);

  // Check if the username already exists
  const username = req.body.username;
  User.findOne({ where: { username: username } })
    .then(user => {
      if (user) {
        res.send({ message: "Username already exists" });
      } else {
        // If the username does not exist, add the new user
        addUser(req, res);
      }
    })
    .catch(err => {
      console.error('Error during signup:', err);
      res.status(500).send({ message: "Internal server error" });
    });
};

// Creating a function to add a user to the database
function addUser(req, res) {
  const userName = req.body.username;
  const userEmail = req.body.email;
  // Hashing the password using bcrypt
  const userPassword = bcrypt.hashSync(req.body.password, 8);

  // Creating a user object to add to the database
  User.create({
    username: userName,
    email: userEmail,
    password: userPassword
  })
    .then(() => {
      res.send('Profile created successfully');
    })
    .catch((err) => {
      res.status(400).send('Error: ' + err);
    });
}

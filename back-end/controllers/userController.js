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
exports.signIn = async function (req, res) {
  

  console.log('Received user data:', req.body);

  try {
    const { username, password } = req.body;

    const user = await User.findOne({
      where: { username: username }
    });

    if (!user) {
      return res.status(404).send({ message: 'User Not found.' });
    }

    // Use bcrypt.compare to compare the provided password with the stored hashed password
    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: 'Invalid Password!',
      });
    }

    // Sign a JWT token with the user's ID
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || '1234', {
      expiresIn: 86400, // 24 hours
    });

    res.cookie('token', token, { httpOnly: true });

    

    res.status(200).send({
      id: user.id,
      username: user.username,
      supermarketName: user.supermarketName,
      accessToken: token,
    });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

// Creating a function to add a user to the database
function addUser(req, res) {
  const userName = req.body.username;
  const userEmail = req.body.email;
  const userSupermarket = req.body.supermarketName;
  // Hashing the password using bcrypt
  const userPassword = bcrypt.hashSync(req.body.password, 8);

  // Creating a user object to add to the database
  User.create({
    username: userName,
    email: userEmail,
    password: userPassword,
    supermarketName: userSupermarket
  })
    .then(() => {
      res.send('Profile created successfully');
    })
    .catch((err) => {
      res.status(400).send('Error: ' + err);
    });
}


exports.testRoute = function (req, res, next) {

  console.log('Test route reached');
  res.status(200).json({ message: 'Test route successful' });
  
  
};

const User = require('../models/user');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.signUp=function(req,res){

 console.log('Received user data:', req.body);
// Check if the username already exists
  User.findOne({
    username: req.body.username,
  }).exec((err, user) => {
    if (err) {
      res.send({ message: err });
      return;
    } else if (user) {
      res.send({ message: "Username already exists" });
      return;
    } else {
// If the username does not exist, add the new user
      addUser();
    }
  });
};


//creating a function to add a user to the database
function addUser(){
    
    userName = req.body.username;
    userEmail = req.body.email;
    //hashing the password using bcrypt soon after getting it from req.body
    userPassword = bcrypt.hashSync(req.body.password, 8);

    //creating a user object to add to the database
    User.create({
        username: userName,
        email: userEmail,
        password: userPassword
    }).then(()=>{
        res.send('Profile created sucessfully');
    }).catch((err)=>{
       res.status(400).send('Error: '+err);
    });

}


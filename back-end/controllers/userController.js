const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models");
let selectedVegController = require("./selectedVegController");

async function signUp(req, res) {
  console.log("Received user data:", req.body);

  // Check if the username already exists
  const username = req.body.username;
  const user = await User.findOne({ where: { username: username } });

  try {
    if (user) {
      res.send({ message: "Username already exists" });
    } else {
      // If the username does not exist, add the new user
      addUser(req, res);
    }
  } catch (err) {
    console.error("Error during signup:", err);
    res.status(500).send({ message: "Internal server error" });
  }
}

async function signIn(req, res) {
  console.log("Received user data:", req.body);

  try {
    const { username, password } = req.body;

    const user = await User.findOne({
      where: { username: username },
    });

    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    // Use bcrypt.compare to compare the provided password with the stored hashed password
    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!",
      });
    }

    // Sign a JWT token with the user's ID
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || "1234", {
      expiresIn: 86400, // 24 hours
    });

    res.cookie("token", token, { httpOnly: true });

    res.status(200).send({
      id: user.id,
      username: user.username,
      supermarketName: user.supermarketName,
      accessToken: token,
    });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send({ message: "Internal Server Error" });
  }
}

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
    supermarketName: userSupermarket,
  })
    .then(() => {
      res.send("Profile created successfully");
    })
    .catch((err) => {
      res.status(400).send("Error: " + err);
    });
}

async function getUserData(req, res) {
  const userId = req.user.id;
  User.findOne({ where: { id: userId } })
    .then((user) => {
      if (user) {
        res.send(user);
      } else {
        res.send({ message: "User not found" });
      }
    })
    .catch((err) => {
      console.error("Error during getUserData:", err);
      res.status(500).send({ message: "Internal server error" });
    });
}

function testRoute(req, res, next) {
  console.log("Test route reached");
  res.status(200).json({ message: "Test route successful" });
}

async function changeUserData(req, res) {
  try {
    const userId = req.user.id; // Assuming the authenticated user's ID is available in the request
    const { password } = req.body;

    // Fetch the user from the database
    const user = await User.findOne({ where: { id: userId } });

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    // Check if the provided password matches the user's password
    const passwordIsValid = await bcrypt.compare(password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({ message: "Invalid password" });
    }

    // Update the user's data based on the request body
    if (req.body.username) {
      user.username = req.body.username;
    }
    if (req.body.email) {
      user.email = req.body.email;
    }
    if (req.body.supermarketName) {
      user.supermarketName = req.body.supermarketName;
    }
    if (req.body.newPassword) {
      user.password = bcrypt.hashSync(req.body.newPassword, 8);
    }
    // Save the updated user object to the database
    await user.save();

    res.status(200).send({ message: "User data updated successfully", user });
  } catch (error) {
    console.error("Error during changeUserData:", error);
    res.status(500).send({ message: "Internal server error" });
  }
}
async function DeleteUserData(req, res) {
  try {
    const userId = req.user.id; // Assuming the authenticated user's ID is available in the request
    const { password } = req.body;

    // Fetch the user from the database
    const user = await User.findOne({ where: { id: userId } });

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    // Check if the provided password matches the user's password
    const passwordIsValid = await bcrypt.compare(password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({ message: "Invalid password" });
    }
    if (req.body.password) {
      // Delete the user account
      await user.destroy();
      return res
        .status(200)
        .send({ message: "User account deleted successfully" });
    }

    // Save the updated user object to the database
    await user.save();

    res.status(200).send({ message: "User data updated successfully", user });
  } catch (error) {
    console.error("Error during changeUserData:", error);
    res.status(500).send({ message: "Internal server error" });
  }
}

// Exporting each function separately
module.exports.signUp = signUp;
module.exports.signIn = signIn;
module.exports.testRoute = testRoute;
module.exports.getUserData = getUserData;
module.exports.changeUserData = changeUserData;
module.exports.DeleteUserData = DeleteUserData;

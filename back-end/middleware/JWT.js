const jwt = require("jsonwebtoken");

let verifyToken = function(req, res, next) {
    let token = req.cookies.token; 
    console.log('Token:', token);  // Add this line for debugging
    if (!token) {
      return res.status(403).send({ message: "No token provided!" });
    }
  
    jwt.verify(token, '1234', (err, decoded) => {
      if (err) {
        console.error('JWT Verification Error:', err);  // Add this line for debugging
        return res.status(401).send({ message: "Unauthorized!" });
      }
      req.userId = decoded.id;
      next();
    });
  };

module.exports = verifyToken
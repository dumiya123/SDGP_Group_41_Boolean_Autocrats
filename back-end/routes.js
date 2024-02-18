let controllerUser = require('./controllers/userController');
const verifyToken = require('./middleware/JWT');



let router = require('express').Router();

router.get("/",function(req,res){
    res.json({
        status: 'API is working',
        message: 'Welcome to the API'
    });
});

//router for the signup endpoint
router.route("/signup").post(controllerUser.signUp)
router.route("/signIn").post(controllerUser.signIn)
router.route("/res").post(verifyToken,controllerUser.testRoute);


module.exports = router;
let controllerUser = require('./controllers/userController');
const verifyToken = require('./middleware/JWT');
let controllerBudget = require('./controllers/budgetController');
let controllScraper=require('./controllers/scraperController');



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

//routers for the budget endpoints
router.route("/getBudget").get(verifyToken,controllerBudget.getBudgets);
router.route("/createBudget").post(verifyToken,controllerBudget.createBudget);

//routers for the scraping endpoint
router.route("/scraper").get(verifyToken,controllScraper.scrapeDataKeels);
router.route("/filter").post(verifyToken,controllScraper.filterCategory);


module.exports = router;
let controllerUser = require("./controllers/userController");
const verifyToken = require("./middleware/JWT");
let controllerBudget = require("./controllers/budgetController");
let controllScraper = require("./controllers/scraperController");
let selectedVegController = require("./controllers/selectedVegController");
let selectedFishController = require("./controllers/selectedFishController");
let expensesTotalController = require("./controllers/expensesTotalController");
let selectedMeatController = require("./controllers/selectedMeatController");
let selectedBeveragesController = require("./controllers/selectedBeveragesController");

let router = require("express").Router();

router.get("/", function (req, res) {
  res.json({
    status: "API is working",
    message: "Welcome to the API",
  });
});

//router for the signup endpoint
router.route("/signup").post(controllerUser.signUp);
router.route("/signIn").post(controllerUser.signIn);
router.route("/res").post(verifyToken);

//routers for the budget endpoints
router.route("/getBudget").get(verifyToken, controllerBudget.getBudgets);
router.route("/createBudget").post(verifyToken, controllerBudget.createBudget);
router.route("/updateBudget").post(verifyToken, controllerBudget.updateBudget);

//routers for the scraping endpoint
//routes for selected Items(tables crud) end-points
router.route("/addVeg").post(verifyToken, selectedVegController.addVeg);
router.route("/addFish").post(verifyToken, selectedFishController.addFish);
router.route("/addMeat").post(verifyToken, selectedMeatController.addMeat);
router
  .route("/addBeverages")
  .post(verifyToken, selectedBeveragesController.addBeverage);

router
  .route("/filterCategory")
  .post(verifyToken, controllScraper.filterCategory);

router.route("/profile").get(verifyToken, controllerUser.getUserData);
router.route("/editProfile").post(verifyToken, controllerUser.changeUserData);
router
  .route("/calenderExpenses")
  .post(verifyToken, expensesTotalController.getExpensesForDate);

module.exports = router;

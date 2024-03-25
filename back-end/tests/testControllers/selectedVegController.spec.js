const {
  addVeg,
  updateVeg,
  getBudgetIdsByVegName,
} = require("../../controllers/selectedVegController");

// Mock the models
const { SelectedVeg, Budget } = require("../../models");

// Mock the Budget model
jest.mock("../../models", () => {
  const mockSelectedVeg = {
    findOne: jest.fn(),
    create: jest.fn(),
  };

  const mockBudget = {
    findOne: jest.fn(),
  };

  return {
    SelectedVeg: mockSelectedVeg,
    Budget: mockBudget,
  };
});

describe("Selected Vegetable Controller", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("addVeg", () => {
    it("should add a new vegetable to the user's budget", async () => {
      const req = {
        body: {
          vegName: "Tomato",
          price: 1.5,
          imgSrc: "tomato.jpg",
          quantity: 3,
          unitPrice: 0.5,
        },
        user: { id: 1 }, // Mock authenticated user
      };
      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };
      const mockBudget = { budgetId: 1 };
      const mockUserBudget = { budgetId: 1 };
      const mockExistingSelectedVeg = null;

      // Mocking the Budget.findOne method to resolve with a mock budget
      Budget.findOne.mockResolvedValue(mockBudget);

      // Mocking the SelectedVeg.findOne method to resolve with no existing selected vegetable
      SelectedVeg.findOne.mockResolvedValue(mockExistingSelectedVeg);

      // Mocking the SelectedVeg.create method to resolve with a mocked new selected vegetable
      SelectedVeg.create.mockResolvedValue({
        id: 1,
        vegName: req.body.vegName,
        price: req.body.price,
        budgetId: mockUserBudget.budgetId,
        quantity: req.body.quantity,
        totalPrice: req.body.unitPrice * req.body.quantity,
        unitPrice: req.body.unitPrice,
        imgSrc: req.body.imgSrc,
      });

      // Calling the addVeg function with the mocked request and response objects
      await addVeg(req, res);

      // Verifying that the Budget.findOne method was called with the correct parameters
      expect(Budget.findOne).toHaveBeenCalledWith({
        where: { userId: req.user.id },
      });

      // Verifying that the SelectedVeg.findOne method was called with the correct parameters
      expect(SelectedVeg.findOne).toHaveBeenCalledWith({
        where: { vegName: req.body.vegName, budgetId: mockUserBudget.budgetId },
      });

      // Verifying that the SelectedVeg.create method was called with the correct parameters
      expect(SelectedVeg.create).toHaveBeenCalledWith({
        vegName: req.body.vegName,
        price: req.body.price,
        budgetId: mockUserBudget.budgetId,
        quantity: req.body.quantity,
        totalPrice: req.body.unitPrice * req.body.quantity,
        unitPrice: req.body.unitPrice,
        imgSrc: req.body.imgSrc,
      });

      // Verifying that the response status was set to 201 (Created)
      expect(res.status).toHaveBeenCalledWith(201);

      // Verifying that the response.json method was called
      expect(res.json).toHaveBeenCalled();
    });
  });
});

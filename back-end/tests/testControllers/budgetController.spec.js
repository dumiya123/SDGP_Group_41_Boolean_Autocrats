const {
  getBudgets,
  createBudget,
  updateBudget,
} = require("../../controllers/budgetController");
const { User, Budget } = require("../../models");

// Mock the models
jest.mock("../../models", () => {
  const mockUser = {
    findByPk: jest.fn(),
  };

  const mockBudget = {
    findOne: jest.fn(),
    create: jest.fn(),
  };

  return {
    User: mockUser,
    Budget: mockBudget,
  };
});

describe("Budget Controller", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("getBudgets", () => {
    it("should return user's budgets", async () => {
      const req = {
        user: { id: 1 },
      };
      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };

      const mockUser = {
        id: 1,
        Budgets: [
          {
            id: 1,
            budgetName: "Budget 1",
          },
          {
            id: 2,
            budgetName: "Budget 2",
          },
        ],
      };

      User.findByPk.mockResolvedValue(mockUser);

      await getBudgets(req, res);

      expect(User.findByPk).toHaveBeenCalledWith(1, {
        include: [{ model: Budget }],
      });

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        data: mockUser,
      });
    });

    it("should handle user not found", async () => {
      const req = {
        user: { id: 1 },
      };
      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };

      User.findByPk.mockResolvedValue(null);

      await getBudgets(req, res);

      expect(User.findByPk).toHaveBeenCalledWith(1, {
        include: [{ model: Budget }],
      });

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({
        error: "User not found",
      });
    });

    it("should handle internal server error", async () => {
      const req = {
        user: { id: 1 },
      };
      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };

      User.findByPk.mockRejectedValue("Internal Server Error");

      await getBudgets(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error: "Internal Server Error",
      });
    });
  });

  describe("createBudget", () => {
    it("should create a new budget", async () => {
      const req = {
        user: { id: 1 },
        body: {
          budgetname: "New Budget",
          receiveAlerts: true,
          amountForBudget: 1000,
          spentBudget: 0,
          monthlyIncome: 2000,
        },
      };
      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };

      const mockUser = {
        id: 1,
      };

      User.findByPk.mockResolvedValue(mockUser);
      Budget.create.mockResolvedValue({ id: 1 });

      await createBudget(req, res);

      expect(User.findByPk).toHaveBeenCalledWith(1);
      expect(Budget.create).toHaveBeenCalledWith({
        budgetName: "New Budget",
        receiveAlerts: true,
        amountForBudget: 1000,
        spentBudget: 0,
        monthlyIncome: 2000,
        userId: 1,
      });

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        message: "Budget created successfully",
      });
    });
  });
});

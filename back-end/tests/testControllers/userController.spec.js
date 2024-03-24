const userController = require("../../controllers/userController");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../../models");

const user = {
  username: "testuser",
  email: "test@example.com",
  password: "password123",
};

jest.mock("../../models", () => {
  const mockCreate = jest.fn();
  const mockFind = jest.fn();

  return {
    User: {
      create: mockCreate,
      findOne: mockFind,
      // Add other methods as needed
    },
  };
});

describe("User Controller", () => {
  // Test case for signUp function
  describe("signUp", () => {
    beforeEach(() => {
      jest.resetModules();
    });

    it("should create a new user", async () => {
      const req = {
        body: {
          ...user,
        },
      };
      const res = {
        send: jest.fn(),
      };
      User.create = jest.fn().mockResolvedValue(null);
      User.findOne = jest.fn().mockResolvedValue(null);

      const expectedResponse = "Profile created successfully";

      await userController.signUp(req, res);

      expect(res.send).toHaveBeenCalledWith(expectedResponse);
    });

    it('should return "Username already exists" if the username already exists', async () => {
      const req = {
        body: {
          ...user,
        },
      };
      const res = {
        send: jest.fn(),
      };
      User.findOne = jest.fn().mockResolvedValue(user);

      const expectedResponse = { message: "Username already exists" };

      await userController.signUp(req, res);

      expect(res.send).toHaveBeenCalledWith(expectedResponse);
    });
  });

  // Other test cases for other functions in the controller can be added similarly
});

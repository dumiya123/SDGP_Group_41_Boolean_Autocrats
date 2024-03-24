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
  beforeEach(() => {
    jest.resetModules();
  });

  describe("signUp", () => {
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

    it("should create a new user if the username does not already exist", async () => {
      const req = {
        body: {
          username: "newuser",
          email: "newuser@example.com",
          password: "password123",
        },
      };
      const res = {
        send: jest.fn(),
      };

      const mockUser = null; // User does not exist

      User.findOne = jest.fn().mockResolvedValue(mockUser);
      User.create = jest.fn().mockResolvedValue(null);

      const expectedResponse = "Profile created successfully";

      await userController.signUp(req, res);

      expect(User.findOne).toHaveBeenCalledWith({
        where: { username: "newuser" },
      });
      expect(User.create).toHaveBeenCalledWith({
        username: "newuser",
        email: "newuser@example.com",
        password: expect.any(String), // Ensure it's a hashed password
      });
      expect(res.send).toHaveBeenCalledWith(expectedResponse);
    });

    it("should return 'Username already exists' if the username already exists", async () => {
      const req = {
        body: {
          username: "existinguser",
          email: "existinguser@example.com",
          password: "password123",
        },
      };
      const res = {
        send: jest.fn(),
      };

      const mockUser = {
        username: "existinguser",
        email: "existinguser@example.com",
        password: bcrypt.hashSync("password123", 8), // Hashed password
      };

      User.findOne = jest.fn().mockResolvedValue(mockUser);

      const expectedResponse = { message: "Username already exists" };

      await userController.signUp(req, res);

      expect(User.findOne).toHaveBeenCalledWith({
        where: { username: "existinguser" },
      });
      expect(res.send).toHaveBeenCalledWith(expectedResponse);
    });
  });
});

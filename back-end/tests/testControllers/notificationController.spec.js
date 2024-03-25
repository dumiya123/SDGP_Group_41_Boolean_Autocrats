const {
  CreateNotification,
  getNotification,
  getNotificationAndUpdate,
} = require("../../controllers/notificationController");
const { Notification } = require("../../models");

// Mock the models
jest.mock("../../models", () => {
  const mockNotification = {
    create: jest.fn(),
    findAll: jest.fn(),
    update: jest.fn(),
  };

  return {
    Notification: mockNotification,
  };
});

describe("Notification Controller", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("CreateNotification", () => {
    it("should create a new notification", async () => {
      // Mock data
      const userId = 1;
      const notificationContent = "New notification content";
      const mockNotification = { id: 1 };

      // Mock the Notification.create method
      Notification.create.mockResolvedValue(mockNotification);

      // Call the function
      const result = await CreateNotification(userId, notificationContent);

      // Check if Notification.create was called with the correct parameters
      expect(Notification.create).toHaveBeenCalledWith({
        userId: userId,
        readStatus: 0, // Assuming false is represented by 0
        notificationContent: notificationContent,
      });

      // Check if the result matches the expected notification
      expect(result).toEqual(mockNotification);
    });
  });

  describe("getNotification", () => {
    it("should fetch notifications for the given user", async () => {
      // Mock data
      const userId = 1;
      const mockNotifications = [
        { id: 1, notificationContent: "Notification 1" },
      ];

      // Mock the Notification.findAll method
      Notification.findAll.mockResolvedValue(mockNotifications);

      // Mock request and response objects
      const req = { user: { id: userId } };
      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };

      // Call the function
      await getNotification(req, res);

      // Check if Notification.findAll was called with the correct parameters
      expect(Notification.findAll).toHaveBeenCalledWith({
        where: { userId: userId },
      });

      // Check if the response status and JSON data are as expected
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockNotifications);
    });
  });

  describe("getNotificationAndUpdate", () => {
    it("should fetch notifications for the given user and update read status", async () => {
      // Mock data
      const userId = 1;
      const mockNotifications = [
        { id: 1, notificationContent: "Notification 1" },
      ];

      // Mock the Notification.findAll method
      Notification.findAll.mockResolvedValue(mockNotifications);

      // Mock request and response objects
      const req = { user: { id: userId } };
      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };

      // Call the function
      await getNotificationAndUpdate(req, res);

      // Check if Notification.findAll was called with the correct parameters
      expect(Notification.findAll).toHaveBeenCalledWith({
        where: { userId: userId },
      });

      // Check if Notification.update was called with the correct parameters
      expect(Notification.update).toHaveBeenCalledWith(
        { readStatus: 1 }, // Update readStatus to true (assuming true is represented by 1)
        { where: { userId: userId } }
      );

      // Check if the response status and JSON data are as expected
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockNotifications);
    });
  });
});

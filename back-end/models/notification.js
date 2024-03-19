"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    static associate(models) {
      // Establish many-to-one relationship with User
      Notification.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user" // Alias for the association
      });
    }
  }

  Notification.init(
    {
      // Define attributes of the Notification table
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      readStatus: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false // Assuming default value for read_status is false
      },
      notificationContent: {
        type: DataTypes.STRING, // Define the new column for notification content
        allowNull: true // or false, depending on whether it can be null
      }
    },
    {
      sequelize,
      tableName: "notification",
      modelName: "Notification",
    }
  );

  return Notification;
};



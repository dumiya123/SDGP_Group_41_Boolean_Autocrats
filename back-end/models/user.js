"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.Budget, {
        foreignKey: "userId",
      });

      // Establish one-to-many relationship with Notification
      User.hasMany(models.Notification, {
        foreignKey: "userId",
        as: "notifications" // Alias for the association
      });
    }
  }

  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      supermarketName: {
        type: DataTypes.STRING, // Adjust the data type based on your requirements
        allowNull: true, // or false, depending on whether it can be null
      },
    },
    {
      sequelize,
      tableName: "user",
      modelName: "User",
    }
  );

  return User;
};


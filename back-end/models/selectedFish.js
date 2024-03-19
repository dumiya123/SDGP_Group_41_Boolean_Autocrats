"use strict";
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const SelectedFish = sequelize.define("SelectedFish", {
    fishId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    fishName: {
      type: DataTypes.STRING,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    unitPrice: {
      type: DataTypes.FLOAT,
    },

    spendedAmount: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    totalPrice: {
      type: DataTypes.FLOAT,
    },
    imageSrc: {
      type: DataTypes.STRING,
    },
    budgetId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Budgets",
        key: "budgetId",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  });

  // Define associations if needed
  SelectedFish.associate = (models) => {
    SelectedFish.belongsTo(models.Budget, {
      foreignKey: "budgetId",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return SelectedFish;
};

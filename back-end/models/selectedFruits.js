"use strict";
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const SelectedFruit = sequelize.define("SelectedFruit", {
    fruitId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    fruitName: {
      type: DataTypes.STRING,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    unitPrice: {
      type: DataTypes.FLOAT,
    },
    totalPrice: {
      type: DataTypes.FLOAT,
    },
    spendedAmount: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
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
  SelectedFruit.associate = (models) => {
    SelectedFruit.belongsTo(models.Budget, {
      foreignKey: "budgetId",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return SelectedFruit;
};

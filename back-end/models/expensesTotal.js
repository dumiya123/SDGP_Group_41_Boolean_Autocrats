"use strict";
const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const ExpensesTotal = sequelize.define("ExpensesTotal", {
    expensesTotalId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    totalExpenses: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    budgetId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Budgets", // Make sure this matches your Budget model name
        key: "budgetId",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  });

  // Define associations if needed
  ExpensesTotal.associate = (models) => {
    ExpensesTotal.belongsTo(models.Budget, {
      foreignKey: "budgetId",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return ExpensesTotal;
};

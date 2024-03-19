"use strict";
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const SelectedVeg = sequelize.define("SelectedVeg", {
    vegId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    vegName: {
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

    //this is cahnged from imgSrc to spendedAmount which is a float
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
  SelectedVeg.associate = (models) => {
    SelectedVeg.belongsTo(models.Budget, {
      foreignKey: "budgetId",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return SelectedVeg;
};

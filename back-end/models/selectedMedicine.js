"use strict";
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const SelectedMedicine = sequelize.define("SelectedMedicine", {
    medicineId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    medicineDescription: {
      type: DataTypes.STRING,
    },
    // quantity: {
    //   type: DataTypes.INTEGER,
    // },
    // unitPrice: {
    //   type: DataTypes.FLOAT,
    // },
    spentAmount: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    totalPrice: {
      type: DataTypes.FLOAT,
    },
    // imageSrc: {
    //   type: DataTypes.STRING,
    // },
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
  SelectedMedicine.associate = (models) => {
    SelectedMedicine.belongsTo(models.Budget, {
      foreignKey: "budgetId",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return SelectedMedicine;
};

"use strict";
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const SelectedEducation = sequelize.define("SelectedEducation", {
    resourceId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    resourceName: {
      type: DataTypes.STRING,
    },
    subject: {
      type: DataTypes.STRING,
    },
    topic: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    link: {
      type: DataTypes.STRING,
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
  SelectedEducation.associate = (models) => {
    SelectedEducation.belongsTo(models.Budget, {
      foreignKey: "budgetId",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return SelectedEducation;
};

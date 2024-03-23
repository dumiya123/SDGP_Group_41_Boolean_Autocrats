"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Budget extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Budget.belongsTo(models.User, {
        foreignKey: "userId",
      });

      Budget.hasMany(models.SelectedVeg, {
        foreignKey: "budgetId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      Budget.hasMany(models.SelectedFish, {
        foreignKey: "budgetId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      Budget.hasMany(models.SelectedMeat, {
        foreignKey: "budgetId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      Budget.hasMany(models.SelectedBeverage, {
        foreignKey: "budgetId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      Budget.hasMany(models.SelectedFrozenFood, {
        foreignKey: "budgetId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      Budget.hasMany(models.ExpensesTotal, {
        // Define one-to-many relationship with ExpensesTotal
        foreignKey: "budgetId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Budget.init(
    {
      budgetId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      budgetName: DataTypes.STRING,
      monthlyIncome: DataTypes.DOUBLE,
      amountForBudget: DataTypes.DOUBLE,
      spentBudget: DataTypes.DOUBLE,
      receiveAlerts: DataTypes.BOOLEAN,
      userId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Budget",
    }
  );
  return Budget;
};

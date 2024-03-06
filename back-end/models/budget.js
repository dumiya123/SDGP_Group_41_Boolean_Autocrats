'use strict';
const {
  Model
} = require('sequelize');
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
        foreignKey: 'userId'
      });

      Budget.hasMany(models.SelectedVeg, {
        foreignKey: 'budgetId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Budget.init({
    budgetId: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, 
    },
    budgetname: DataTypes.STRING,
    receiveAlerts: DataTypes.BOOLEAN,
    totalAmount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    remainingAmount: DataTypes.DOUBLE,
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Budget',
  });
  return Budget;
};
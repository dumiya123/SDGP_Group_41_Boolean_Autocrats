'use strict';
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const SelectedVeg = sequelize.define('SelectedVeg', {
    vegId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    vegName: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,
    },
    imageSrc:{
      type: DataTypes.STRING,
    },
    budgetId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Budgets', 
        key: 'budgetId', 
      },
      imgSrc:{
        type: DataTypes.STRING,
      },
      onUpdate: 'CASCADE', 
      onDelete: 'CASCADE', 
    },
  });

  // Define associations if needed
  SelectedVeg.associate = (models) => {
    SelectedVeg.belongsTo(models.Budget, {
      foreignKey: 'budgetId',
      onDelete: 'CASCADE', 
      onUpdate: 'CASCADE', 
    });
  };

  return SelectedVeg;
};

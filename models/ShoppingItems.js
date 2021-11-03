const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our User model
class ShoppingItems extends Model {}

ShoppingItems.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "ShoppingItems",
  }
);

module.exports = ShoppingItems;

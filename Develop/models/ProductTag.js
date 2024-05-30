const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {model: 'Tag',key: 'id',},
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {model: 'Product', key: 'id',},
    },
   
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Product_tag',
  }
);

module.exports = ProductTag;

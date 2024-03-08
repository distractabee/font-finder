const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Font extends Model {}

Font.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    font_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    font_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_serif: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'font',
  }
);

module.exports = Font;
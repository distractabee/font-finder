const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Comments extends Model {}

Comments.init(
    {
      comment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      comment_description: {
        type: DataTypes.STRING,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    } 
);
module.exports = Comments;
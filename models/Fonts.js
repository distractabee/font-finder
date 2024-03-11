const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Fonts extends Model {}

Fonts.init (
    {
        font_name: {
            type: DataTypes.TEXT,
        },
        font_id: {
            type: DataTypes.INTEGER,
        },
        font_url: {
            type: DataTypes.INTEGER,
        },
        is_serif: {
            type: DataTypes.INTEGER,
        },
    },
    
    {
        sequelize,
        timestamps: false,
        freezeTablesName: true,
        modelName: 'fonts',
    }
);

module.exports = Fonts
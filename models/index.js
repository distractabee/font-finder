const User = require('./User');
const Fonts = require('./Fonts');

User.hasMany(Fonts, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Fonts.belongsTo(Fonts, {
    foreignKey: 'user_id'
});

module.exports = { User, Fonts };

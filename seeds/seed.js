const sequelize = require('../config/connections');
const { User, Font } = require('../models');
const fontData = require('./font-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Font.bulkCreate(fontData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();

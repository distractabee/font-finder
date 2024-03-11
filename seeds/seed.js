const sequelize = require('../config/connections');
const { User, Fonts } = require('../models');

const fontData = require('./fontData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const fonts = await User.bulkCreate(fontData, {
        individualHooks: true,
        returning: true,
    });

    for (const font of fontData) {
        await Fonts.create({
            ...font,
            user_id: fonts[Math.floor(Math. random() * users.length)].id,
        });
    }

    process.exit(0);
};

seedDatabase();
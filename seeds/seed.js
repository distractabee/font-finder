const sequelize = require('../config/connections');
const { User, Fonts } = require('../models');

const fontData = require('./fontData.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
    console.log("SEEDING DATABASE");
    await sequelize.sync({ force: true });
    console.log("DATABASE SYNCED");

    console.log("CREATING FONTS");

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    const fonts = await Fonts.bulkCreate(fontData, {
        individualHooks: true,
        returning: true,
    });

    // console.log("");
    // for (const font of fontData) {
    //     await Fonts.create({
    //         ...font,
    //         user_id: fonts[Math.floor(Math. random() * users.length)].id,
    //     });
    // }

    process.exit(0);
};

seedDatabase();

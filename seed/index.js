require("dotenv").config();
const sequelize = require("../config/connection");
const { User, ShoppingItems } = require("../models");

const userData = require("./userData.json");
const itemsData = require("./itemsData.json");


const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
  for (const items of itemsData) {
    await ShoppingItems.create({
      ...items,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
    process.exit(0);
  }
    console.log("Finished seeding database.");
  } catch (error) {
    console.error(error);
    console.error(
      "An error occurred attempting to seed the database. Scroll up for additional details."
    );
  } finally {
    await sequelize.close();
    process.exit(0);
  }
};

seedDatabase();

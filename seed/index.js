require("dotenv").config();
const sequelize = require("../config/connection");
const { User, Funds, Items } = require("../models");

const userData = require("./userData.json");
const fundsData = require("./fundsData.json");
const itemsData = require("./itemsData.json");

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
    for (const funds of fundsData) { // val 
      await Funds.create({
        ...funds,

      });
    }
    for (const item of itemsData) { // check / val
      await Items.create({
        ...item,
        
      });
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

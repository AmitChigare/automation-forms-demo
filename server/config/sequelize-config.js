const { Sequelize, DataTypes } = require("sequelize");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");
    await sequelize.sync();
    console.log("Database synchronized");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = {
  sequelize,
  DataTypes,
  connectDatabase,
};

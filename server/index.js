// server/index.js
const express = require("express");
const app = express();
const cors = require("cors");
const { Sequelize, DataTypes } = require("sequelize");
const dotenv = require("dotenv");

app.use(express.json());
app.use(cors());
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

// Synchronize the models with the database
sequelize
  .sync()
  .then(() => {
    console.log("Database synchronized");
  })
  .catch((err) => {
    console.error("Error synchronizing database:", err);
  });

app.listen(3001, () => {
  console.log("Server running on port 3001");
});

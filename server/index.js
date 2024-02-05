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

const StudentFormModel = require("./models/StudentFormModel")(
  sequelize,
  DataTypes
);

// Synchronize the model with the database and create the table
sequelize
  // .sync({ force: true })
  .sync()
  .then(() => {
    // console.log("Table created successfully!");
    console.log("Database synchronized");
  })
  .catch((err) => {
    console.error("Error creating table:", err);
  });

// Routers
const studentFormRoute = require("./routes/StudentFormRoute")(StudentFormModel);
app.use("/", studentFormRoute);

app.listen(3001, () => {
  console.log("Server running on port 3001");
});

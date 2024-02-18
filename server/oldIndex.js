// server/index.js
const express = require("express");
const app = express();
const cors = require("cors");
const { Sequelize } = require("sequelize");
const passport = require("passport");
const passportConfig = require("./config/passport-config");
const UserModel = require("./models/UserModel");

app.use(express.json());
app.use(cors());
// Load environment variables from .env file if needed
// require("dotenv").config();

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

// Pass the sequelize instance to UserModel function
const User = UserModel(sequelize);

// Synchronize the models with the database
sequelize
  .sync({ force: false }) // Set force to true to drop existing tables and recreate them
  .then(() => {
    console.log("Database synchronized");
  })
  .catch((err) => {
    console.error("Error synchronizing database:", err);
  });

// Set up passport with the correct configuration
passportConfig(passport, User);

// Google authentication callback
app.get(
  "/api/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    // Generate JWT token
    const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h", // Adjust the expiration time as needed
    });
    res.redirect(`http://localhost:3000/login?token=${token}`);
  }
);

// Add your other routes as needed

app.listen(3001, () => {
  console.log("Server running on port 3001");
});

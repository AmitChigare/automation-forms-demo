const express = require("express");
const app = express();
const cors = require("cors");
const { Sequelize, DataTypes } = require("sequelize");
const dotenv = require("dotenv");
const session = require("express-session");
const passport = require("passport");
// Include the Passport configuration
require("./passport-config");

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

// Set up Express session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

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

// Google authentication routes
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.GOOGLE_CALLBACK_URL,
    failureRedirect: "auth/failure",
  })
);

app.get("auth/failure", (req, res) => {
  res.status(404).json({
    error: true,
    message: "Login failed",
  });
});

// Routers
const studentFormRoute = require("./routes/StudentFormRoute")(StudentFormModel);
app.use("/", studentFormRoute);

app.listen(3001, () => {
  console.log("Server running on port 3001");
});

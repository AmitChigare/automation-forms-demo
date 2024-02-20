const express = require("express");
const app = express();
const cors = require("cors");
const { Sequelize, DataTypes } = require("sequelize");
const passport = require("passport");
const session = require("express-session"); // Add this line
const passportConfig = require("./config/passport-config");
const UserModel = require("./models/UserModel");
// const jwt = require("jsonwebtoken"); // Add this line

app.use(express.json());
app.use(
  cors({
    origin: "http://127.0.0.1:5173", // Replace with your frontend URL
    credentials: true,
  })
);

// Use express-session middleware
app.use(
  session({
    secret: "bjhedbebiugheuigeuigegeegiebgebge", // Add a secret key for session management
    resave: false,
    saveUninitialized: false,
  })
);

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

const User = UserModel(sequelize);
const StudentFormModel = require("./models/StudentFormModel")(
  sequelize,
  DataTypes
);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database synchronized");
  })
  .catch((err) => {
    console.error("Error synchronizing database:", err);
  });

passportConfig(passport, User);

app.use(passport.initialize());
app.use(passport.session()); // Use passport.session() middleware after express-session

app.get(
  "/api/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    // console.log("req.user:", req.user);
    res.redirect("http://127.0.0.1:5173"); // Redirect without appending token to URL
  }
);

// Routers
const studentFormRoute = require("./routes/StudentFormRoute")(StudentFormModel);
app.use("/", studentFormRoute);

app.listen(3001, () => {
  console.log("Server running on port 3001");
});

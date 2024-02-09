// routes/UserRoute.js
const express = require("express");
const router = express.Router();

module.exports = (User) => {
  router.post("/register", async (req, res) => {
    const { email, firstName, lastName } = req.body;

    try {
      const newUser = await User.create({
        email,
        firstName,
        lastName,
      });

      console.log("User registered successfully!");
      res.json({ success: true, user: newUser });
    } catch (error) {
      console.error("Error registering user:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  return router;
};

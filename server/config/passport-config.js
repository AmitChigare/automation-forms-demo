// server/config/passport-config.js
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const bcrypt = require("bcrypt");
require("dotenv").config();

module.exports = (passport, User) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3001/api/auth/google/callback",
        scope: ["profile", "email"],
      },
      async (accessToken, refreshToken, profile, done) => {
        const userEmail = profile.emails[0].value;

        try {
          let user = await User.findOne({ where: { email: userEmail } });

          if (!user) {
            user = await User.create({ email: userEmail });
          }

          // console.log(profile);

          return done(null, user);
        } catch (error) {
          console.error("Error during authentication:", error);
          return done(error, null);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser(async (userId, done) => {
    try {
      const user = await User.findByPk(userId);
      done(null, user);
    } catch (error) {
      console.error("Error deserializing user:", error);
      done(error, null);
    }
  });
};

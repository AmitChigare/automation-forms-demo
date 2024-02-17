const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/UserModel");

const dotenv = require("dotenv");
dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3001/api/auth/google/callback",
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log("profile:", profile);

      const userEmail = profile.emails[0].value;

      // Check if the user with the given email exists in the database
      let user;
      try {
        user = await User.findOne({ where: { email: userEmail } });

        if (!user) {
          // If the user does not exist, create a new user in the database
          user = await User.create({
            email: userEmail,
            // Add other user attributes as needed
          });
        }

        console.log("user:", user);
        return done(null, user);
      } catch (error) {
        console.error("Error during authentication:", error);
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (userId, done) => {
  try {
    // Retrieve the user from the database based on the user ID stored in the session
    const user = await User.findByPk(userId);
    done(null, user);
  } catch (error) {
    console.error("Error deserializing user:", error);
    done(error, null);
  }
});

module.exports = passport;

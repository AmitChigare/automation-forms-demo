// server/config/passport-config.js
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { ExtractJwt, Strategy: JwtStrategy } = require("passport-jwt");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const jwtSecret = process.env.JWT_SECRET || "your-secret-key";

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

  passport.use(
    new JwtStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: jwtSecret,
      },
      async (jwtPayload, done) => {
        try {
          const user = await User.findByPk(jwtPayload.id);

          if (!user) {
            return done(null, false, { message: "User not found" });
          }

          return done(null, user);
        } catch (error) {
          console.error("Error during JWT authentication:", error);
          return done(error, false);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
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

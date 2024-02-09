const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const dotenv = require("dotenv");
dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL, // adjust the callback URL as needed
      scope: ["profile", "email"],
    },
    (accessToken, refreshToken, profile, done) => {
      // You can use the profile information directly without saving to a database
      const user = {
        id: profile.id,
        displayName: profile.displayName,
        email: profile.emails[0].value,
        // ... other relevant details
      };

      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

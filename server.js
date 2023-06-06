const express = require("express");
const passport = require("passport");
const googleStrategy = require("passport-google-oauth20");
const app = express();
passport.use(
  new googleStrategy(
    {
      clientID:
        "169137582438-7vfdenvgoki4u8ip87outkhhdd72n0f1.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
      console.log(refreshToken);
      console.log(profile);
    }
  )
);
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

app.get("/auth/google/callback", passport.authenticate("google"));

const port = process.env.PORT || 5001;
console.log("listing on port",port)
app.listen(port);

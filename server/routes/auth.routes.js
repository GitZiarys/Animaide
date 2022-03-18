const express = require("express");
const app = express.Router();
const { verifySignUp } = require("../middlewares/init");
const controller = require("../controllers/auth.controller");

  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post(
    "/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );
  app.post("/auth/signin", controller.signin);


module.exports = app;
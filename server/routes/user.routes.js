const express = require("express");
const app = express.Router();
const { authJwt } = require("../middlewares/init");
const controller = require("../controllers/user.controller");
const User = require("../schemas/user");

  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/test/all", controller.allAccess);
  app.get("/test/user", [authJwt.verifyToken], controller.userBoard);
  app.get(
    "/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
  app.put("/test/image", (req, res) => {
    const username = req.params.currentUser.username
    User.findOne({ username }).then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
  })
  app.get("/test/get", (req, res) => {
    User.find({}).then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
  })

module.exports = app;
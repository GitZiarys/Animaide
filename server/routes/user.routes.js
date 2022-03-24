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
  app.get("/user/all", controller.allAccess);
  app.get("/user/getuser", [authJwt.verifyToken], controller.userBoard);
  app.get(
    "/user/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
  app.put("/user/image", (req, res) => {
    const usr = req.body.username
    const img = req.body.profileImage
    User.findOne({ username : usr })
    User.findOneAndUpdate({ username : usr}, {profileImage : img})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
  })
  app.get("/user/", (req, res) => {
    User.findOne({ username: req.body.username }).then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
  })

module.exports = app;
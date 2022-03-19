const express = require("express");
const Test = require("../schemas/test");
const Mission = require("../schemas/mission");
const User = require("../schemas/user");
const router = express.Router();

router.get("/", (req, res) => {
  Test.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

router.post("/save", (req, res) => {
  const data = req.body;

  const newTest = new Test(data);

  newTest.save((error) => {
    if (error) {
      res.status(500).json({
        msg: "Error",
      });
      return;
    }
    return res.json({
      msg: "Data received !",
    });
  });
});

module.exports = router;

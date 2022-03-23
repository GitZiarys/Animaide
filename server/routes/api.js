const express = require("express");
const Test = require("../schemas/test");
const Mission = require("../schemas/mission");
const User = require("../schemas/user");
const router = express.Router();

router.get("/", (req, res) => {
  Mission.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

router.get("/associations/", (req, res) => {
  Mission.find({})
    .then((data1) => {
      res.json(data1);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

router.get("/:slug", (req, res) => {
  Mission.findOne({ slug: req.params.slug })
    .then(mission => res.json(mission))
    .catch(err => res.status(404).json({ nomissionfound: 'No Mission found' }));
});

router.get("/associations/:assoslug", (req, res) => {
  Mission.findOne({ assoslug: req.params.assoslug })
    .then(assos => res.json(assos))
    .catch(err => res.status(404).json({ nomassosfound: 'No Assos found' }));
    
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

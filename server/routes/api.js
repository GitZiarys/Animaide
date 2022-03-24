const express = require("express");
const Mission = require("../schemas/mission");
const Association = require("../schemas/association");
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

router.get("/associations", (req, res) => {
  Association.find({})
    .then((data) => {
      res.json(data);
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

router.get("/associations/:slug", (req, res) => {
  Association.findOne({ slug: req.params.slug })
    .then(assos => res.json(assos))
    .catch(err => res.status(404).json({ noassosfound: 'No Association found' }));
});

module.exports = router;

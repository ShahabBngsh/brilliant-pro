const express = require("express");
const router = express.Router();
const Learner = require("../models/learner");

const learnerController = require("../controllers/learnerController");

router.get("/", learnerController.getAllLearners);
router.post("/", learnerController.addLearner);
router.get("/:id", learnerController.getLearnerbyID);
router.put("/:id", learnerController.updateLearner);
router.delete("/:id", learnerController.deleteLearner);
module.exports = router;

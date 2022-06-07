const express = require("express");
const router = express.Router();
const Assessment = require("../models/assessment");

const assessmentController = require("../controllers/assessmentController");

router.get("/", assessmentController.getAllAssessments);
router.post("/", assessmentController.addAssessment);
router.get("/:id", assessmentController.getAssessmentbyID);
router.put("/:id", assessmentController.updateAssessment);
router.delete("/:id", assessmentController.deleteAssessment);
module.exports = router;

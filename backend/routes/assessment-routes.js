const express = require("express");
const router = express.Router();
const Assessment = require("../models/assessment");

const assessmentController = require("../controllers/assessmentController");

router.get("/", assessmentController.getAllAssessments);
router.post("/addAssessment", assessmentController.addAssessment);
router.get("/getAssessment/:id", assessmentController.getAssessmentbyID);
router.put("/updateAssessment/:id", assessmentController.updateAssessment);
router.delete("/deleteAssessment/:id", assessmentController.deleteAssessment);
module.exports = router;

const express = require("express");
const router = express.Router();
const Course = require("../models/course");

const courseController = require("../controllers/courseController");

router.get("/", courseController.getAllCourses);
router.post("/", courseController.addCourse);
router.get("/:id", courseController.getCoursebyID);
router.put("/:id", courseController.updateCourse);
router.delete("/:id", courseController.deleteCourse);
module.exports = router;

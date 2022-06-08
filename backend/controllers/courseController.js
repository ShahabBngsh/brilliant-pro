const Course = require("../models/course");

const getAllCourses = async (req, res, next) => {
  let courses;
  try {
    courses = await Course.find();
  } catch (err) {
    console.log(err);
  }
  if (!courses) {
    return res.status(404).json({ message: "No courses to display" });
  }
  return res.status(200).json({ courses });
};
////////////////////////////////////////////////////////////////////
const addCourse = async (req, res, next) => {
  const { title, img, overview, price, offeredBy, skills, materials, assesments, enrolled, mid, failed, passed } = req.body;
  let course;
  try {
    course = new Course({
      title,
      img,
      overview,
      price,
      offeredBy,
      skills,
      materials,
      assesments,
      enrolled,
      mid,
      failed,
      passed,
    });
    await course.save();
  } catch (err) {
    console.log("Error adding the Course" + JSON.stringify(err, undefined, 2));
  }
  if (!course) {
    return res.status(404).json({ message: "Unable to Add course" });
  }
  return res.status(200).json({ course });
};

const getCoursebyID = async (req, res, next) => {
  let course;
  try {
    course = await Course.findById(req.params.id);
  } catch (err) {
    console.log(err);
  }
  if (!course) {
    return res.status(404).json({ message: "Course not found with id " });
  }
  return res.status(200).json({ course });
};
//////////////////////////////////////////////////////////////////////////////////////////////
const updateCourse = async (req, res, next) => {
  const { title, img, overview, price, offeredBy, skills, materials, assessments, enrolled, mid, failed, passed } = req.body;
  let newCourse = { title, img, overview, price, offeredBy, skills, materials, assessments, enrolled, mid, failed, passed };
  let course;
  try {
    course = await Course.findByIdAndUpdate(req.params.id, newCourse);
    course = await course.save();
  } catch (err) {
    console.log(err);
  }
  if (!course) {
    return res.status(404).json({ message: "Cannot update the course" });
  }
  // return res.redirect('/api/courses');
};

const deleteCourse = async (req, res, next) => {
  let course;
  try {
    course = await Course.findByIdAndDelete(req.params.id);
  } catch (err) {
    console.error(err);
  }
  if (!course) {
    return res.status(404).json({ message: "Cannot delete the Course" });
  }
  // return res.redirect('/api/courses');
};
exports.deleteCourse = deleteCourse;

exports.updateCourse = updateCourse;
exports.getCoursebyID = getCoursebyID;
exports.addCourse = addCourse;
exports.getAllCourses = getAllCourses;

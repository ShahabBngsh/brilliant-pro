const Assessment = require("../models/assessment");

const getAllAssessments = async (req, res, next) => {
  let assessments;
  try {
    assessments = await Assessment.find();
  } catch (err) {
    console.log(err);
  }
  if (!assessments) {
    return res.status(404).json({ message: "No assessment to display" });
  }
  return res.status(200).json({ assessments });
};
////////////////////////////////////////////////////////////////////
const addAssessment = async (req, res, next) => {
  const { title, duration, minPassingCriteria, questions, answers} = req.body;
  let assessment;
  try {
    assessment = new Assessment({
      title,
      duration,
      minPassingCriteria,
      questions,
      answers,
    });
    await assessment.save();
  } catch (err) {
    console.log("Error adding the assessment" + JSON.stringify(err, undefined, 2));
  }
  if (!assessment) {
    return res.status(404).json({ message: "Unable to Add assessment" });
  }
  return res.status(200).json({ assessment });
};

const getAssessmentbyID = async (req, res, next) => {
  let assessment;
  try {
    assessment = await Assessment.findById(req.params.id);
  } catch (err) {
    console.log(err);
  }
  if (!assessment) {
    return res.status(404).json({ message: "assessment not found with id " });
  }
  return res.status(200).json({ assessment });
};
//////////////////////////////////////////////////////////////////////////////////////////////
const updateAssessment = async (req, res, next) => {
  const { title, duration, minPassingCriteria, questions, answers } = req.body;
  let newAssessment = { title, duration, minPassingCriteria, questions, answers };
  let assessment;
  try {
    assessment = await Assessment.findByIdAndUpdate(req.params.id, newAssessment);
    assessment = await assessment.save();
  } catch (err) {
    console.log(err);
  }
  if (!assessment) {
    return res.status(404).json({ message: "Cannot update the assessment" });
  }
  // return res.redirect('/api/assessments');
};

const deleteAssessment = async (req, res, next) => {
  let assessment;
  try {
    assessment = await Assessment.findByIdAndDelete(req.params.id);
  } catch (err) {
    console.error(err);
  }
  if (!assessment) {
    return res.status(404).json({ message: "Cannot delete the assessment" });
  }
  return res.redirect('/api/assessment');
};
exports.deleteAssessment = deleteAssessment;

exports.updateAssessment = updateAssessment;
exports.getAssessmentbyID = getAssessmentbyID;
exports.addAssessment = addAssessment;
exports.getAllAssessments = getAllAssessments;

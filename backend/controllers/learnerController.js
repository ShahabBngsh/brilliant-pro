const Learner = require("../models/learner");

const getAllLearners = async (req, res, next) => {
  let learners;
  try {
    learners = await Learner.find();
  } catch (err) {
    console.log(err);
  }
  if (!learners) {
    return res.status(404).json({ message: "No learners to display" });
  }
  return res.status(200).json({ learners });
};
////////////////////////////////////////////////////////////////////
const addLearner = async (req, res, next) => {
  const { name, img, bio, achievements, enrolled, assesments, balance } = req.body;
  let learner;
  try {
    learner = new Learner({
      name,
      img,
      bio,
      achievements,
      enrolled,
      assesments,
      balance,
    });
    await learner.save();
  } catch (err) {
    console.log("Error adding the Learner" + JSON.stringify(err, undefined, 2));
  }
  if (!learner) {
    return res.status(404).json({ message: "Unable to Add learner" });
  }
  return res.status(200).json({ learner });
};

const getLearnerbyID = async (req, res, next) => {
  let learner;
  try {
    learner = await Learner.findById(req.params.id);
  } catch (err) {
    console.log(err);
  }
  if (!learner) {
    return res.status(404).json({ message: "Learner not found with id " });
  }
  return res.status(200).json({ learner });
};
//////////////////////////////////////////////////////////////////////////////////////////////
const updateLearner = async (req, res, next) => {
  const { name, img, bio, achievements, enrolled, assesments, balance } = req.body;
  let newLearner = { name, img, bio, achievements, enrolled, assesments, balance };
  let learner;
  try {
    learner = await Learner.findByIdAndUpdate(req.params.id, newLearner);
    learner = await learner.save();
  } catch (err) {
    console.log(err);
  }
  if (!learner) {
    return res.status(404).json({ message: "Cannot update the learner" });
  }
  // return res.redirect('/api/learners');
};

const deleteLearner = async (req, res, next) => {
  let learner;
  try {
    learner = await Learner.findByIdAndDelete(req.params.id);
  } catch (err) {
    console.error(err);
  }
  if (!learner) {
    return res.status(404).json({ message: "Cannot delete the Learner" });
  }
  // return res.redirect('/api/learners');
};
exports.deleteLearner = deleteLearner;

exports.updateLearner = updateLearner;
exports.getLearnerbyID = getLearnerbyID;
exports.addLearner = addLearner;
exports.getAllLearners = getAllLearners;

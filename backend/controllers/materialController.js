const Material = require("../models/material");

const getAllMaterials = async (req, res, next) => {
  let materials;
  try {
    materials = await Material.find();
  } catch (err) {
    console.log(err);
  }
  if (!materials) {
    return res.status(404).json({ message: "No material to display" });
  }
  return res.status(200).json({ materials });
};
////////////////////////////////////////////////////////////////////
const addMaterial = async (req, res, next) => {
  const { title, link } = req.body;
  let material;
  try {
    material = new Material({
      title,
      link,
    });
    await material.save();
  } catch (err) {
    console.log(
      "Error adding the material" + JSON.stringify(err, undefined, 2)
    );
  }
  if (!material) {
    return res.status(404).json({ message: "Unable to Add material" });
  }
  return res.status(200).json({ material });
};

const getMaterialbyID = async (req, res, next) => {
  let material;
  try {
    material = await Material.findById(req.params.id);
  } catch (err) {
    console.log(err);
  }
  if (!material) {
    return res.status(404).json({ message: "material not found with id " });
  }
  return res.status(200).json({ material });
};
//////////////////////////////////////////////////////////////////////////////////////////////
const updateMaterial = async (req, res, next) => {
  const { title, link } = req.body;
  let newMaterial = { title, link };
  let material;
  try {
    material = await Material.findByIdAndUpdate(req.params.id, newMaterial);
    material = await material.save();
  } catch (err) {
    console.log(err);
  }
  if (!material) {
    return res.status(404).json({ message: "Cannot update the material" });
  }
  // return res.redirect('/api/materials');
};

const deleteMaterial = async (req, res, next) => {
  let material;
  try {
    material = await Material.findByIdAndDelete(req.params.id);
  } catch (err) {
    console.error(err);
  }
  if (!material) {
    return res.status(404).json({ message: "Cannot delete the material" });
  }
  // return res.redirect('/api/material');
};
exports.deleteMaterial = deleteMaterial;

exports.updateMaterial = updateMaterial;
exports.getMaterialbyID = getMaterialbyID;
exports.addMaterial = addMaterial;
exports.getAllMaterials = getAllMaterials;

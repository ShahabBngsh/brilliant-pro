const express = require("express");
const router = express.Router();
const Material = require("../models/material");

const materialController = require("../controllers/materialController");

router.get("/", materialController.getAllMaterials);
router.post("/addMaterial", materialController.addMaterial);
router.get("/getMaterial/:id", materialController.getMaterialbyID);
router.put("/updateMaterial/:id", materialController.updateMaterial);
router.delete("/deleteMaterial/:id", materialController.deleteMaterial);
module.exports = router;

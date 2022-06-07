const express = require("express");
const router = express.Router();
const Material = require("../models/material");

const materialController = require("../controllers/materialController");

router.get("/", materialController.getAllMaterials);
router.post("/", materialController.addMaterial);
router.get("/:id", materialController.getMaterialbyID);
router.put("/:id", materialController.updateMaterial);
router.delete("/:id", materialController.deleteMaterial);
module.exports = router;

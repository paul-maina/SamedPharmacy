

{/*

const express = require("express");
const router = express.Router();
const Medicine = require("../models/Medicine");

// Get ALL medicines
router.get("api/AdminPanel/products", async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.json(medicines);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get medicines by CATEGORY
router.get("/category/:category", async (req, res) => {
  try {
    const category = decodeURIComponent(req.params.category);
    const medicines = await Medicine.find({
      category: { $regex: new RegExp(`^${category}$`, "i") },
    });
    res.json(medicines);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get single medicine by ID (this MUST come last)
router.get("/:id", async (req, res) => {
  try {
    const medicine = await Medicine.findById(req.params.id);
    if (!medicine) {
      return res.status(404).json({ message: "Medicine not found" });
    }
    res.json(medicine);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new medicine
router.post("/", async (req, res) => {
  try {
    const newMed = new Medicine(req.body);
    const savedMed = await newMed.save();
    res.status(201).json(savedMed);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update medicine
router.put("/:id", async (req, res) => {
  try {
    const updatedMed = await Medicine.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedMed) {
      return res.status(404).json({ message: "Medicine not found" });
    }
    res.json(updatedMed);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete medicine
router.delete("/:id", async (req, res) => {
  try {
    const deletedMed = await Medicine.findByIdAndDelete(req.params.id);
    if (!deletedMed) {
      return res.status(404).json({ message: "Medicine not found" });
    }
    res.json({ message: "Medicine deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

*/}
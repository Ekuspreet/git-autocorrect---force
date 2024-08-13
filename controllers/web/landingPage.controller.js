const express = require("express");

const router = express.Router();

// Define your route handler
router.get("/", (req, res) => {
  res.render("landing");
});

module.exports = router;

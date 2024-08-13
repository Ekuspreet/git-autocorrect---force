const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    console.log(req.body);
    
})

router.post("/force", (req, res) => {
    console.log(req.body);
    
})

module.exports = router;
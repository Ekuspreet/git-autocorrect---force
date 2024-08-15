const express = require("express");
const router = express.Router();
const findMatchingWords = require('@utils/autoCorrect.function.js') 

router.post("/", (req, res) => {
    console.log(req.body);
    console.log(findMatchingWords(req.body))
})

router.post("/force", (req, res) => {
    console.log(req.body);
    
})

module.exports = router;

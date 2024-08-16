const express = require("express");
const fs = require('fs');
const router = express.Router();
const replaceWord = require('@utils/autoCorrect.function.js')

const fileContent = fs.readFileSync('words_alpha.txt', 'utf-8'); 
const WORD_ARRAY = fileContent.split('\r\n');
console.log('array generated')

router.post("/", (req, res) => {
    console.log(req.body);
    res.status(200).json(
        {
            "matching_word" : replaceWord(req.body.word, WORD_ARRAY, req.body.flag), 
        }
    ) 

})

router.post("/force", (req, res) => {
    console.log(req.body);
    
})

module.exports = router;

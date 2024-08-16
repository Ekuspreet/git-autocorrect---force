const express = require("express");
const fs = require('fs');
const router = express.Router();
const findMatchingWords = require('@utils/autoCorrect.function.js')

const fileContent = fs.readFileSync('/home/raghavrana/MyGitRepos/git-autocorrect---force/words_alpha.txt', 'utf-8'); 
const WORD_ARRAY = fileContent.split('\r\n');
console.log('array generated')

router.post("/", (req, res) => {
    console.log(req.body);
    console.log(findMatchingWords(req.body.word, WORD_ARRAY))
})

router.post("/force", (req, res) => {
    console.log(req.body);
    
})

module.exports = router;

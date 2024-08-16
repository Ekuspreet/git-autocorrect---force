const fs = require('fs');

function generateRegexPatterns(word) {

    const patterns = [];
    const length = word.length;

    // one extra character
    for (let i = 0; i <= length; i++) {
        const pattern = '^' + word.slice(0, i) + '.' + word.slice(i + 1) + '$';
        patterns.push(new RegExp(pattern, "i"));
    }

    // one word deletion
    for (let i = 0; i < length; i++) {
        const pattern = '^' + word.slice(0, i) + word.slice(i + 1) + '$';
        patterns.push(new RegExp(pattern, "i"));
    }

    // one word substitution 
    for (let i = 0; i < length; i++) {
        const pattern = '^' + word.slice(0, i) + '.' + word.slice(i + 1) + '$';
        patterns.push(new RegExp(pattern, "i"));
    }

    // one word substitution 
    for (let i = 0; i < length-1; i++) {
        const pattern = '^' + word.slice(0, i) +  word[i+1] + word[i] + word.slice(i+2) + '$';
        patterns.push(new RegExp(pattern, "i"));
    }

    return patterns;
}

function findMatchingWords(word) {
    const fileContent = fs.readFileSync('/home/raghavrana/MyGitRepos/git-autocorrect---force/words_alpha.txt', 'utf-8');
    const lines = fileContent.split('\r\n');

    const regexPatterns = generateRegexPatterns(word.word);
    const matchedWords = []

    regexPatterns.forEach((pattern) => {
        lines.forEach((line) => {
            if (pattern.test(line)){
                matchedWords.push(line)
            } 
        }) 
    });

    return matchedWords;
}

module.exports = findMatchingWords;

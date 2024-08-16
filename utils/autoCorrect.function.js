const fs = require('fs');

function generateRegexPatterns(word) {

    const cache = []
    const patterns = [];
    const length = word.length;

    // prepair cache
    for(let i = 0; i <= length; i++){
        cache.push(word.slice(0, i))
    }
    for(let i = 1; i <= length; i++){
        cache.push(word.slice(i, length))
    }

    // one extra character (n+1)
    for (let i = 0; i <= length; i++) {
        const pattern = '^' + cache[i] + '.' + cache[length+i] + '$';
        patterns.push(new RegExp(pattern, "i"));
    }

    // one character deletion (n)
    for (let i = 0; i < length; i++) {
        const pattern = '^' + cache[i] + cache[length+1+i] + '$';
        patterns.push(new RegExp(pattern, "i"));
    }

    // one character substitution (n) 
    for (let i = 0; i < length; i++) {
        const pattern = '^' + cache[i] + '.' + cache[length+1+i] + '$';
        patterns.push(new RegExp(pattern, "i"));
    }

    // one word exchange (n-1)
    for (let i = 0; i < length-1; i++) {
        const pattern = '^' + cache[i] +  word[i+1] + word[i] + cache[length+2+i] + '$';
        patterns.push(new RegExp(pattern, "i"));
    }

    console.log(patterns)
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

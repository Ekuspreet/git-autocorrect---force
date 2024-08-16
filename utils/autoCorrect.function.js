const fs = require('fs');

const common_words = ["the", "be", "and", "of", "a", "in", "to", "have", "it", "I", "that", "for", "you", "he", "with", "on", "do", "say", "this", "they", "at", "but", "we", "his", "from", "not", "by", "she", "or", "as", "what", "go", "their", "can", "who", "get", "if", "would", "her", "all", "my", "make", "about", "know", "will", "up", "one", "time", "there"];


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

function searchWord(word, word_array) {
    const regex = new RegExp('^' + word + '$', "i");

    return word_array.some(line => regex.test(line));
}

function scrambleWord(word){
  let typo = word;

    const common = {
        'ph': 'f',
        'f': 'ph',
        'th': 'd',
        'duck': 'dick',
        'dig': 'digga',
        'oo': 'u',
        'ough': 'off',
        'tion': 'oitn',
        'ing': 'gin',
        're': 'un',
        'un': '',
        'in': '',
        'as': 'ass',
    };
    
    for (const [key, value] of Object.entries(common)) {
        const regex = new RegExp(key, 'gi');
        typo = typo.replace(regex, value);
    }

    // swap shit
    const adjacentKeySwaps = {
        'q': 'w', 'w': 'q', 'e': 'r', 'r': 'e', 't': 'y', 'y': 't', 'u': 'i', 'i': 'u', 'o': 'p', 'p': 'o',
        'a': 's', 's': 'a', 'd': 'f', 'f': 'd', 'g': 'h', 'h': 'g', 'j': 'k', 'k': 'j', 'l': 'k',
        'z': 'x', 'x': 'z', 'c': 'v', 'v': 'c', 'b': 'n', 'n': 'b', 'm': 'n'
    };
    
    typo = typo.split('').map(char => {
        return adjacentKeySwaps[char.toLowerCase()] || char;
    }).join('');

    // repleat words
    const doubleLetters = (str) => {
        return str.replace(/([a-z])/gi, (match) => {
            return Math.random() > 0.9 ? match + match : match;
        });
    };
    typo = doubleLetters(typo);

    // random
    const randomInsert = (str) => {
        const positions = Math.floor(Math.random() * (str.length + 1));
        const randomChar = String.fromCharCode(33 + Math.floor(Math.random() * 15)); // ASCII symbols
        return str.slice(0, positions) + randomChar + str.slice(positions);
    };
    if (Math.random() > 0.7) {
        typo = randomInsert(typo);
    }

    return typo;
}

function cheemglish(word){
    let cheemglish = word;

    // add extra m
    cheemglish = cheemglish.replace(/([pb])/gi, "m$1");

    // double r s t l
    cheemglish = cheemglish.replace(/(r|s|t|l)/gi, "$1$1");

    // sh ch
    cheemglish = cheemglish.replace(/s/gi, (match, offset) => {
        return Math.random() > 0.5 ? "sh" : "ch";
    });

    // vowels
    cheemglish = cheemglish.replace(/(a|e)/gi, "am");
    cheemglish = cheemglish.replace(/i/gi, "im");
    cheemglish = cheemglish.replace(/o/gi, "om");
    cheemglish = cheemglish.replace(/u/gi, "oom");


    // w'fy
    cheemglish = cheemglish.replace(/f/gi, "fw");
    cheemglish = cheemglish.replace(/l/gi, "w");

    // huehue
    const insertHuehue = (str) => {
        const positions = Math.floor(Math.random() * (str.length + 1));
        return str.slice(0, positions) + "huehue" + str.slice(positions);
    };
    
    cheemglish = insertHuehue(cheemglish);
    return cheemglish;
}

function corrupt(word, mode, common_words){
    switch(word) {
        case 1: // no corruption
            return word;
        case 2: // corrupt only if uncommon 
            if(common_words.includes(word)){
                return word;
            }
            return scrambleWord(word)
        case 3: // no one is spared 
            return scrambleWord(word)
        case 4: // cheemglish
            return cheemglish(word)
    }        
}

function replaceWord(word, word_array, mode) {

    if(searchWord(word, word_array)){
        return corrupt(word, mode);
    }

    const lines = word_array;

    const regexPatterns = generateRegexPatterns(word);
    const matchedWords = []

    regexPatterns.forEach((pattern) => {
        lines.forEach((line) => {
            if (pattern.test(line) && !matchedWords.includes(line)){
                matchedWords.push(line)
            } 
        }) 
    });

    return matchedWords[0];
}

module.exports = replaceWord;

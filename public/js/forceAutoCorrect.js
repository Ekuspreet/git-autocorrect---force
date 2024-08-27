console.log("Force AutoCorrect Script Loaded");

// getting data 
function triggerForceAutoCorrect(){

    textArea.disabled = true; // Disable the text area

    let words = textArea.value.split(/\s+|\n/);
    console.log(words);
    textArea.value = "";

    for(let i = 0; i < words.length; i++){
        triggerAutoCorrect(words[i],"forced");
    }

    textArea.disabled = false; // Enable the text area
}
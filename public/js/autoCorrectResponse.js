console.log("Auto Correct Response Script Loaded");

function handleResponse(data){
    console.log(data.matching[0]);

    let text = textarea.value;

    let updatedText = text.replace(/[^\s]?\w+\s$/, data.matching[0]+' ');

    textarea.value = updatedText

};

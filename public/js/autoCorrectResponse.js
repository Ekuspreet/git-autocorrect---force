console.log("Auto Correct Response Script Loaded");

function handleResponse(data){
    console.log(data.matching_word);

    let text = textarea.value;

    let updatedText = text.replace(/[^\s]?\w+\s$/, data.matching_word+' ');

    textarea.value = updatedText

};

function handleForceResponse(data){
    console.log(data.matching_word);
    textarea.value += data.matching_word+' ';

}
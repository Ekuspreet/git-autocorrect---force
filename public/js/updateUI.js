console.log("Script to update UI loaded");

const chars = document.getElementById("chars");
const words = document.getElementById("words"); 
textArea.addEventListener('input', updateUI);
function updateUI(){
    const data = textArea.value;
    if(data.length === 0){
        chars.innerText = "Chars : 0";
        words.innerText = "Words : 0";
    }else{
        chars.innerText = `Chars : ${data.length}`;
        words.innerText = `Words : ${data.split(" ").length}`;
    }
}
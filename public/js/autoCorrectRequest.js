console.log("Auto Correcting Script Loaded");

function triggerAutoCorrect(word){
    // Send a POST request to the server
    fetch("/api/autocorrect", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({word : word}),
    })

}

function triggerForceAutoCorrect(){
    const textArea = document.getElementById("textarea");

    // Send a POST request to the server
    fetch("/api/autocorrect/force", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({content : textArea.value}),  
    })

}
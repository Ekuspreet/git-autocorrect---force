console.log("Auto Correcting Script Loaded");

async function triggerAutoCorrect(word){ 

    try {
        const response = await fetch("/api/autocorrect", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({word : word, flag: document.getElementById("option").value}),
        });

        if (response.ok) {
           
            const data = await response.json();
            handleResponse(data);
           
        } else {
            
            throw new Error("Request failed with status " + response.status);
        }
    } catch (error) {
        // Handle network error or exception
        console.error(error);
    }
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

console.log("Auto Correcting Script Loaded");

async function triggerAutoCorrect(word,type = "normal"){ 

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
            if(type == "forced"){
                handleForceResponse(data);
            }else{

                handleResponse(data);
            }
           
        } else {
            
            throw new Error("Request failed with status " + response.status);
        }
    } catch (error) {
        // Handle network error or exception
        console.error(error);
    }
}

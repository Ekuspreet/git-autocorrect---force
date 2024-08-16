console.log("File Upload Script Is Loaded");

let chosenOption = false; // Global variable to store the chosen option

// Function to handle file selection and processing
function handleFileUpload(event) {
    event.preventDefault();

    const fileInput = document.getElementById("file-input");
    const file = fileInput.files[0];

    if (!file) {
        alert("Please select a file");
        return;
    }

    if (file.type !== "text/plain") {
        alert("Please select a .txt file");
        return;
    }

    // Show the confirmation modal
    confirmationModal();

    console.log(file);
    console.log(file.name);
}

// Function to show the confirmation modal
function confirmationModal() {
    const modal = document.getElementById("confirmationmodal");
    if (modal) {
        modal.showModal();
    } else {
        console.error("Modal element not found");
    }
}

// Function to handle option selection from the modal
function handleOptionSelection(event) {
    event.preventDefault();
    
    const targetId = event.target.id;
    if (targetId === "append") {
        chosenOption = true;
    } else if (targetId === "overwrite") {
        chosenOption = false;
    }
    
    // Close the modal
    const modal = document.getElementById("confirmationmodal");
    if (modal) {
        modal.close();
    } else {
        console.error("Modal element not found");
    }

    // Perform action based on the chosen option
    processFileOption();

    console.log(chosenOption);
}

// Function to process the file based on the chosen option
function processFileOption() {
    // Get the file input and text area
    const fileInput = document.getElementById("file-input");
    const file = fileInput.files[0];
    const textArea = document.getElementById("textarea");

    if (file && textArea) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const fileContent = event.target.result;
            if (chosenOption) {
                // Append content
                textArea.value += fileContent;
            } else {
                // Overwrite content
                textArea.value = fileContent;
            }
            updateUI();
        };
        reader.readAsText(file);
    }
}

// Attach event listeners
document.getElementById("load-btn").addEventListener("click", handleFileUpload);
document.getElementById("options").addEventListener("click", handleOptionSelection);

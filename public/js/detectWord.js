console.log("Word Detection Script Loaded");

const textArea = document.getElementById("textarea");

textArea.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
        const cursorPosition = textArea.selectionStart;
        let startIndex = cursorPosition - 1;
        let scannedText = "";

        // Scan backwards to find the start of the word
        while (startIndex >= 0 && textArea.value[startIndex] !== " " && textArea.value[startIndex] !== "\n") {
            scannedText = textArea.value[startIndex] + scannedText;
            startIndex--;
        }

        // Log the scanned text if it is not empty
        if (scannedText.trim() !== "") {
            triggerAutoCorrect(scannedText);
        }
    }
});

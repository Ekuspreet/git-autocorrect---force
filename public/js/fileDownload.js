console.log("File Download Script Loaded");

function triggerFileDownload() {
    const text = document.getElementById("textarea").value;
    const filename = "forcedautocorrect.txt";
    const blob = new Blob([text], { type: "text/plain" });

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;

    // Simulate a click on the link to trigger the download
    link.click();

    // Clean up the temporary link
    URL.revokeObjectURL(link.href);
}

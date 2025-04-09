// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", () => {
    const qrInput = document.getElementById("qrInput");
    const generateBtn = document.getElementById("generateBtn");

    const qr = new QRious({
        element: document.createElement("canvas"), // Dynamically create a canvas element for the QR code
        value: "", // Initial value of the QR code (empty)
        size: 200 // Size of the QR code in pixels
    });

    generateBtn.addEventListener("click", () => {
        const inputValue = qrInput.value.trim();

        // Check if the input is empty
        if (inputValue === "") {
            return; // Stop further execution
        }

        // Set the value of the QR code to the user input
        qr.value = inputValue;

        // Get the container where the QR code will be displayed
        const qrContainer = document.getElementById("qrContainer");
        qrContainer.innerHTML = ""; // Clear any previously generated QR code
        qrContainer.appendChild(qr.element); // Append the new QR code canvas to the container

        // Clear the input field after generating the QR code
        qrInput.value = "";

        // Add a success message below the QR code
        const successMessage = document.createElement("p");
        successMessage.textContent = "QR Code generated successfully!";
        successMessage.className = "text-success mt-3"; // Bootstrap class for green text
        qrContainer.appendChild(successMessage);
        

        // Add a download button
/*
   The <a> tag is used here because it supports the 'download' attribute, 
   which allows the user to download the QR code as an image file.
   This is more efficient than using a <button> because the 'download' functionality 
   is built into the <a> tag, making it easier to implement file downloads.
   The 'href' attribute is set to the QR code's PNG data URL, and the 'download' attribute 
   specifies the default file name for the downloaded image.
*/
        const downloadBtn = document.createElement("a"); 
        downloadBtn.textContent = "Download QR Code";    // Set the text for the download button
        downloadBtn.className = "btn btn-success mt-3"; // Bootstrap class for styling
        downloadBtn.href = qr.element.toDataURL("image/png"); // Convert canvas to PNG data URL
        downloadBtn.download = "qr-code.png"; // Set the default file name for download
        qrContainer.appendChild(downloadBtn); 
        

    });
});

// This is a test comment to verify changes
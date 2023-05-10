async function downloadData() {
    // Put it inside a try...catch statement incase of errors. 
    try {
        // Making an AJAX request to fetch the data from the API endpoint (to exchange data with a server).
        // Source: https://www.w3schools.com/xml/ajax_xmlhttprequest_send.asp 
        const response = await fetch("/contacts/vcard"); // Defining the API endpoint path.
        const data = await response.json();

        // Create a 'blob' (a file-like object for file handling) with the data.
        // Source: https://developer.mozilla.org/en-US/docs/Web/API/Blob 
        const blob = new Blob([JSON.stringify(data)], { type: "text/vcard" });

        // Create a download link for the blob.
        const url = URL.createObjectURL(blob);

        // Create a link element and that starts the download when clicking o it.
        const link = document.createElement("a");
        link.href = url;
        link.download = "data.json";
        document.body.appendChild(link);
        link.click();

        // Cleanup the URL object
        URL.revokeObjectURL(url);
    }  catch (error) {
        console.error(error);
    }
}
async function downloadData() {
    try {

        // Switch between these two
        const axioslocal = "http://127.0.0.1:3001";
        const axiosurl = "https://cacheapi-idg2001.onrender.com";

        // Send an axios get request
        const response = await axios.get(`${axiosurl}/contacts_cache/vcard`, {
            responseType: 'blob'
        });

        // Create a 'blob' (a file-like object for file handling) with the response data.
        // Source: https://developer.mozilla.org/en-US/docs/Web/API/Blob 
        const blob = new Blob([response.data], { type: 'text/vcard' });

        // Create a download link for the blob.
        const url = URL.createObjectURL(blob);

        // Create a link element and that starts the download when clicking on it.
        const link = document.createElement('a');
        link.href = url;
        link.download = 'contacts.vcf';
        document.body.appendChild(link);
        link.click();

        // Cleanup the URL object
        URL.revokeObjectURL(url);
    } catch (error) {
        console.error(error);
    }
}
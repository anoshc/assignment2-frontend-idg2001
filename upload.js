// Function Upload File
function uploadFile(event) {
    const axios = require('axios/dist/browser/axios.cjs');

    event.preventDefault(); // prevent the form from submitting

    const fileInput = document.querySelector('#file');
    const file = fileInput.files[0];
    console.log(file);

    const formData = new FormData();
    formData.append('file', file);

    // Switch between these two
    const axioslocal = "http://127.0.0.1:3001"
    const axiosurl = "https://cacheapi-idg2001.onrender.com"

    axios.post(`${axioslocal}/formcontacts`, formData)
        .then(response => {
            response.data.file
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
}

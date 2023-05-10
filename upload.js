// Function Upload File
function uploadFile(event) {
    const axios = require('axios/dist/browser/axios.cjs');

    event.preventDefault(); // prevent the form from submitting

    const fileInput = document.querySelector('#file');
    const file = fileInput.files[0];

    const formData = new FormData();
    formData.append('file', file);

    axios.post('/legg til url og route her', formData)
        .then(response => {
            console.log(response.data);
            // do something with the response
        })
        .catch(error => {
            console.log(error);
            // handle the error
        });
}

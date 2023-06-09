// Function Upload File
function uploadFile(event) {

    event.preventDefault(); // prevent the form from submitting

    const fileInput = document.querySelector('#file');
    console.log(fileInput);
    const file = fileInput.files[0];
    console.log(file);

    const formData = new FormData();
    formData.append('file', file);

    // Switch between these two
    const axioslocal = "http://127.0.0.1:3001"
    const axiosurl = "https://cacheapi-idg2001.onrender.com"

    // Remember to change between axioslocal and axiosurl, if you are running it locally or not. 
    axios.post(`${axiosurl}/formcontacts`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
          }
    })
        .then(response => {
            response.data
            console.log(response.data);
        })
        .catch(error => {
            console.log("Upload failed", error);
        });
}

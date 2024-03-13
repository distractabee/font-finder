// client.js

document.addEventListener('DOMContentLoaded', () => {
    // Code to execute when the DOM content is fully loaded

    // Example: Change the background color of the body
    const body = document.querySelector('body');
    body.style.backgroundColor = '#f0f0f0';

    // Example: Fetch data from an API
    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => {
            // Process the fetched data
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

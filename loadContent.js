// Function to load header and footer dynamically
function loadContent() {
    // Load header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data); // Inserts header at the top
        })
        .catch(error => console.error('Error loading header:', error));

    // Load footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data); // Inserts footer at the bottom
        })
        .catch(error => console.error('Error loading footer:', error));
}

// Load header and footer after the DOM content has loaded
window.addEventListener('DOMContentLoaded', loadContent);

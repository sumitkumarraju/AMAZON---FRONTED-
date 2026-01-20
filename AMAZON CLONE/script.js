// Back to Top Functionality
const backToTopButton = document.querySelector('.foot-panel1');

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Search Functionality (Mock)
const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon');

searchIcon.addEventListener('click', () => {
    const query = searchInput.value;
    if (query.trim() !== "") {
        alert(`Searching for: ${query}\n(This is a clone, actual search not implemented)`);
    } else {
        alert("Please enter a search term.");
    }
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const query = searchInput.value;
        if (query.trim() !== "") {
            alert(`Searching for: ${query}\n(This is a clone, actual search not implemented)`);
        }
    }
});

// Cart Functionality
const cartIcon = document.querySelector('.nav-cart');

cartIcon.addEventListener('click', () => {
    alert("Your Amazon Cart is empty.");
});

// Address Location Mock
const addressLoc = document.querySelector('.nav-address');
addressLoc.addEventListener('click', () => {
    alert("Location selection is not available in this demo.");
});

// Category/Box Links
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('click', () => {
        const category = box.querySelector('h2').innerText;
        // Simulate navigation
        console.log(`Navigating to ${category}`);
        // In a real app, window.location.href = ...
    });
});

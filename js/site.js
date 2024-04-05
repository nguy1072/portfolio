// Get the current page URL
var currentPageUrl = window.location.pathname;

// Select all navigation links
var navLinks = document.querySelectorAll('.nav-link');

// Loop through the links
navLinks.forEach(function(link) {
    // Check if the link URL matches the current page URL
    if (currentPageUrl.includes(link.getAttribute('href'))) {
        // Add 'active' class to the matched link
        link.classList.add('active');
    }
});



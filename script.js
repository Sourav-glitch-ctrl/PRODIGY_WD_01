// JavaScript to add "active" class to the clicked tab
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');

    // Add click event listener to each nav link
    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            // Remove "active" class from all links
            navLinks.forEach((nav) => nav.classList.remove('active'));

            // Add "active" class to the clicked link
            link.classList.add('active');
        });
    });
});


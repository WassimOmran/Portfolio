document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check if dark mode preference is saved in localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

    // Toggle dark mode based on preference
    body.classList.toggle('dark-mode', isDarkMode);
    darkModeToggle.classList.toggle('dark-mode', isDarkMode);

    // Event listener for dark mode toggle button
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        darkModeToggle.classList.toggle('dark-mode');

        // Save dark mode preference in localStorage
        localStorage.setItem('darkMode', body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
    });

    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    // Mobile menu icon click event
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });

    // Mobile menu link click event
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        });
    });

    // Scroll sections active link
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    window.addEventListener('scroll', () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                });
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            }
        });

        // Sticky navbar
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);
    });

    // Scroll reveal
    ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200,
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

    // Typed.js
    const typed = new Typed('.multiple-text', {
        strings: ['Electrical Engineer', 'Inventor', 'Developer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
    });
});

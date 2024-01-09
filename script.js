document.addEventListener('DOMContentLoaded', () => {
    // Function to create the dark mode toggle button
    const createDarkModeToggle = () => {
        const darkModeToggle = document.createElement('button');
        darkModeToggle.id = 'darkModeToggle';
        darkModeToggle.textContent = 'Dark Mode';
        document.body.appendChild(darkModeToggle);

        // Add hover animation class
        darkModeToggle.addEventListener('mouseover', () => {
            darkModeToggle.classList.add('hover-animation');
        });

        darkModeToggle.addEventListener('mouseout', () => {
            darkModeToggle.classList.remove('hover-animation');
        });

        // Toggle dark mode on button click
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            darkModeToggle.classList.toggle('dark-mode');

            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
        });
    };

    // Function to initialize dark mode on page load
    const initializeDarkMode = () => {
        const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
        document.body.classList.toggle('dark-mode', isDarkMode);
        createDarkModeToggle();
    };

    // Initialize dark mode
    initializeDarkMode();

    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });

    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        });
    });

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

        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);
    });

    ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200,
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

    const typed = new Typed('.multiple-text', {
        strings: ['Electrical Engineer', 'Inventor', 'Developer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
    });
});

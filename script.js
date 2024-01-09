    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    /*=====scroll sections active link=====*/
    window.addEventListener('scroll', () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active')
                });
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            };
        });

        /*=====sticky navbar=====*/
        let header = document.querySelector('header');

        header.classList.toggle('sticky', window.scrollY > 100);
    });

    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        });
    });

        /*=====remove toggleicon and navbar when click navbar link=====*/
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');


    /*=====scroll reveal=====*/
    ScrollReveal({ 
        //reset: true, 
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

    /*=====typed js=====*/
    const typed = new Typed('.multiple-text', {
        strings: ['Electrical Engineer', 'Inventor', 'Developer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    document.addEventListener('DOMContentLoaded', () => {
        const darkModeToggle = document.getElementById('darkModeToggle');
        const body = document.body;
    
        // Check if dark mode preference is saved in localStorage
        const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    
        // Toggle dark mode based on preference
        if (isDarkMode) {
            body.classList.add('dark-mode');
            darkModeToggle.classList.add('dark-mode'); // Add dark-mode class to the button
        }
    
        // Event listener for dark mode toggle button
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            darkModeToggle.classList.toggle('dark-mode'); // Toggle dark-mode class on the button
    
            // Save dark mode preference in localStorage
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
            } else {
                localStorage.setItem('darkMode', 'disabled');
            }
        });
    });
    
    

    

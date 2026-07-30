/*=========================================
Responsive Navigation Menu
=========================================*/

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

/*=========================================
Close Menu When Clicking a Link
=========================================*/

const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {

    link.addEventListener('click', () => {

        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');

    });

});

/*=========================================
Sticky Header & Active Navigation
=========================================*/

const header = document.querySelector('.header');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {

    header.classList.toggle('sticky', window.scrollY > 100);

    sections.forEach(section => {

        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {

            document
                .querySelectorAll('.navbar a')
                .forEach(link => link.classList.remove('active'));

            const activeLink = document.querySelector(
                `.navbar a[href="#${id}"]`
            );

            if (activeLink) {
                activeLink.classList.add('active');
            }
        }

    });

});

/*=========================================
Typing Animation
=========================================*/

new Typed('.multiple-text', {

    strings: [
        'Aspiring Software Developer',
        'Java Developer',
        'Web Developer',
        'IT Student'
    ],

    typeSpeed: 80,
    backSpeed: 60,
    backDelay: 1500,
    loop: true

});

/*=========================================
Scroll Reveal Animation
=========================================*/

ScrollReveal({

    distance: '80px',
    duration: 2000,
    delay: 200,
    reset: false

});

ScrollReveal().reveal(
    '.home-content, .heading',
    {
        origin: 'top'
    }
);

ScrollReveal().reveal(
    '.home-img, .projects-container, .skills-container',
    {
        origin: 'bottom'
    }
);

ScrollReveal().reveal(
    '.about-img',
    {
        origin: 'left'
    }
);

ScrollReveal().reveal(
    '.about-content, .education-container, .contact form',
    {
        origin: 'right'
    }
);

/*=========================================
Smooth Scroll
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {

            target.scrollIntoView({

                behavior: 'smooth'

            });

        }

    });

});

/*=========================================
Footer Year
=========================================*/

const year = new Date().getFullYear();
const footerText = document.querySelector('.footer-text p');

if (footerText) {

    footerText.innerHTML =
        `© ${year} Princess Makola | All Rights Reserved`;

}

/*=========================================
Simple Contact Form Validation
=========================================*/

const form = document.querySelector('form');

if (form) {

    form.addEventListener('submit', function (e) {

        e.preventDefault();

        const inputs = form.querySelectorAll('input, textarea');

        let valid = true;

        inputs.forEach(input => {

            if (input.value.trim() === '') {

                valid = false;
                input.style.border = '2px solid red';

            } else {

                input.style.border = '2px solid #38bdf8';

            }

        });

        if (valid) {

            alert(
                'Thank you for your message! I will get back to you soon.'
            );

            form.reset();

        }

    });

}
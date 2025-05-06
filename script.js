// JavaScript for Personal Portfolio

// Toggle Navigation Menu on Mobile
document.querySelector('.menu-icon').addEventListener('click', () => {
    function toggleMenu() {
        const navMenu = document.querySelector('.nav ul');
        navMenu.classList.toggle('show');
    }
});

function toggleMenu() {
    const navMenu = document.querySelector('.nav ul');
    navMenu.classList.toggle('show');
}

// Smooth Scroll to Sections
document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        // Prevent default behavior if linking to an ID
        if (this.getAttribute('href').startsWith('#')) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Adjust for fixed header
                    behavior: 'smooth',
                });
            }
        }
    });
});

// Scroll Indicator Animation
window.addEventListener('scroll', () => {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        if (window.scrollY > 100) {
            scrollIndicator.style.opacity = '0'; // Hide when scrolling
        } else {
            scrollIndicator.style.opacity = '1'; // Show at the top of the page
        }
    }
});

// Dynamic Year in Footer
const currentYear = new Date().getFullYear();
const footerYearElement = document.querySelector('#footer-year');
if (footerYearElement) {
    footerYearElement.textContent = currentYear;
}

// Alert on "Email ID" Button Click
document.querySelectorAll('.btn[href^="mailto"]').forEach(button => {
    button.addEventListener('click', () => {
        alert('Opening email client...');
    });
});




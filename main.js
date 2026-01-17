document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for Fade-in Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach(el => observer.observe(el));

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            // Adjust offset for header height if needed
            // const headerOffset = 80;
            // const elementPosition = target.getBoundingClientRect().top;
            // const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    // Hero Slider
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;
    const slideInterval = 5000;

    if (slides.length > 0) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, slideInterval);
    }
});

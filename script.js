// Smooth scrolling para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Carousel Certificates
const certPrev = document.getElementById('certPrev');
const certNext = document.getElementById('certNext');
const certificatesGrid = document.querySelector('.certificates-grid');

if (certPrev && certNext && certificatesGrid) {
    certPrev.addEventListener('click', () => {
        certificatesGrid.scrollBy({
            left: -220,
            behavior: 'smooth'
        });
    });

    certNext.addEventListener('click', () => {
        certificatesGrid.scrollBy({
            left: 220,
            behavior: 'smooth'
        });
    });
}

// Carousel Posts
const postsPrev = document.getElementById('postsPrev');
const postsNext = document.getElementById('postsNext');
const postsGrid = document.querySelector('.posts-grid');

if (postsPrev && postsNext && postsGrid) {
    postsPrev.addEventListener('click', () => {
        postsGrid.scrollBy({
            left: -220,
            behavior: 'smooth'
        });
    });

    postsNext.addEventListener('click', () => {
        postsGrid.scrollBy({
            left: 220,
            behavior: 'smooth'
        });
    });
}

// Animação ao scroll para elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar cards e elementos
document.querySelectorAll('.about-card, .cert-card, .post-card, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

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

// Carousel Motos
const postsPrev = document.getElementById('postsPrev');
const postsNext = document.getElementById('postsNext');
const motoSlides = document.querySelectorAll('.moto-slide');

let currentMoto = 0;

function showMoto(index, direction = 'next') {
    motoSlides.forEach(slide => {
        slide.classList.remove('active', 'prev');
    });
    if (motoSlides[index]) {
        motoSlides[index].classList.add('active');
        if (direction === 'prev') {
            motoSlides[index].classList.add('prev');
        }
    }
}

if (postsPrev && postsNext) {
    postsPrev.addEventListener('click', () => {
        currentMoto = (currentMoto - 1 + motoSlides.length) % motoSlides.length;
        showMoto(currentMoto, 'prev');
    });

    postsNext.addEventListener('click', () => {
        currentMoto = (currentMoto + 1) % motoSlides.length;
        showMoto(currentMoto, 'next');
    });

    showMoto(0);
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

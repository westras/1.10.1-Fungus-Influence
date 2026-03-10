
document.addEventListener('scroll', () => {
    const scrolled = document.scrollY;
    const parallax = document.querySelector('.parallax-bg');
    parallax.style.transform = `translateY(${scrolled * 0.3}px)`;
});

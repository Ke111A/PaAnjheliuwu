// Function to create stars in the sky
function createStars() {
    const sky = document.querySelector('.sky');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        sky.appendChild(star);
    }
}

// Function to create shooting stars
function createShootingStars() {
    const sky = document.querySelector('.sky');
    for (let i = 0; i < 10; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.classList.add('shooting-star');
        shootingStar.style.top = `${Math.random() * 100}vh`;
        shootingStar.style.left = `${Math.random() * 100}vw`;
        shootingStar.style.animationDelay = `${Math.random() * 5}s`;
        sky.appendChild(shootingStar);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createStars();
    createShootingStars();
});
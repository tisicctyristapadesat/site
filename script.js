const starsContainer = document.querySelector('.stars');

for (let i = 0; i < 120; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.position = 'absolute';
    star.style.background = 'white';
    star.style.borderRadius = '50%';
    star.style.opacity = Math.random();

    // Animace pomocí CSS tříd
    const animDuration = Math.random() * 5 + 5;
    star.style.animation = `twinkle ${animDuration}s infinite ease-in-out`;

    starsContainer.appendChild(star);
}

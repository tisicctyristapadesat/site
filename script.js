const starsContainer = document.querySelector('.stars');

for (let i = 0; i < 200; i++) { // více hvězd (200)
    const star = document.createElement('div');
    star.style.position = 'absolute';
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;

    const size = Math.random() * 2 + 0.5; // menší i větší hvězdičky
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.background = 'white';
    star.style.borderRadius = '50%';
    star.style.opacity = Math.random();

    // Extra rychlá animace – 1 až 2.5 sekundy
    const speed = Math.random() * 1.5 + 1;
    star.style.animation = `twinkle ${speed}s infinite ease-in-out`;

    starsContainer.appendChild(star);
}

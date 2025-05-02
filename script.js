const starsContainer = document.querySelector('.stars');

for (let i = 0; i < 120; i++) {
    const star = document.createElement('div');
    star.style.position = 'absolute';
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;

    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.background = 'white';
    star.style.borderRadius = '50%';
    star.style.opacity = Math.random();
    star.style.animation = `twinkle ${Math.random() * 5 + 5}s infinite ease-in-out`;

    starsContainer.appendChild(star);
}

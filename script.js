const starsContainer = document.querySelector('.stars');

for (let i = 0; i < 120; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.width = star.style.height = `${Math.random() * 2 + 1}px`;
    star.style.position = 'absolute';
    star.style.background = 'white';
    star.style.borderRadius = '50%';
    star.style.opacity = Math.random();
    starsContainer.appendChild(star);
}

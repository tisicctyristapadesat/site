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

    // Blikání zůstává beze změny
    const blinkSpeed = Math.random() * 3 + 2;  // Blikání na 2–5 sekund
    star.style.animation = `twinkle ${blinkSpeed}s infinite ease-in-out, move ${Math.random() * 3 + 3}s linear infinite`; // Rychlý pohyb

    starsContainer.appendChild(star);
}

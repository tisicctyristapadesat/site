const starsContainer = document.querySelector('.stars');

for (let i = 0; i < 200; i++) { // více hvězd (200)
    const star = document.createElement('div');
    star.style.position = 'absolute';
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;

    const size = Math.random() * 2 + 0.5; // menší i větší hvězičky
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.background = 'white';
    star.style.borderRadius = '50%';
    star.style.opacity = Math.random();

    // Rychlost rotace kolem středu
    const rotationSpeed = Math.random() * 5 + 3; // rotace kolem středu
    const orbitRadius = Math.random() * 50 + 30; // velikost oběhu hvězdy

    // Animace pro rotaci kolem středu a blikání
    const blinkSpeed = Math.random() * 3 + 2;  // Blikání na 2–5 sekund
    star.style.animation = `twinkle ${blinkSpeed}s infinite ease-in-out, rotateAround ${rotationSpeed}s linear infinite`;

    // Nastavení pozice podle okruhu
    star.style.transformOrigin = `center center`; // Střed hvězdy jako středu rotace
    star.style.marginLeft = `${orbitRadius}px`; // Okruh kolem středu

    starsContainer.appendChild(star);
}

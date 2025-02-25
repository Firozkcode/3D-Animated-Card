const cards = document.querySelectorAll('.services-box');
const RANGE = 40;

const calcValue = (a, b) => {
    return (a / b * RANGE - RANGE / 2).toFixed(1);
};

cards.forEach((card) => {
    card.addEventListener('mousemove', (event) => {
        const rect = card.getBoundingClientRect();
        const yValue = calcValue(event.clientY - rect.top, rect.height);
        const xValue = calcValue(event.clientX - rect.left, rect.width);

        card.style.transform = `rotateX(${-yValue}deg) rotateY(${xValue}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0deg) rotateY(0deg)';
        card.style.transition = 'transform 0.3s ease-out'; // Smooth reset transition
    });

    card.addEventListener('mouseenter', () => {
        card.style.transition = 'none'; // Remove transition on re-enter
    });
});

const testimonialCards = document.querySelectorAll('.testimonial-card');
const modal = document.querySelector('.testimonial-modal');
const modalImage = document.querySelector('.modal-image');
const modalTitle = document.querySelector('.modal-title');
const modalText = document.querySelector('.modal-text');
const closeModal = document.querySelector('.close-btn');

testimonialCards.forEach((card) => {
    card.addEventListener('click', () => {
        const name = card.getAttribute('data-name');
        const text = card.getAttribute('data-text');
        const image = card.getAttribute('data-image');

        modalImage.src = image;
        modalTitle.textContent = name;
        modalText.textContent = text;

        modal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('quote-form');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const details = document.getElementById('project-details').value.trim();

        if (!name || !email || !phone || !details) {
            displayError('Please fill out all fields.');
            return;
        }

        if (!validateEmail(email)) {
            displayError('Please enter a valid email address.');
            return;
        }

        if (!validatePhone(phone)) {
            displayError('Please enter a valid phone number.');
            return;
        }
        successMessage.classList.remove('hidden');
        successMessage.textContent = 'Thank you! Your quote request has been submitted.';
        form.reset();
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
        function validatePhone(phone) {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }
    function displayError(message) {
        const errorElement = document.createElement('div');
        errorElement.classList.add('error-message');
        errorElement.textContent = message;
        form.insertAdjacentElement('beforebegin', errorElement);
        setTimeout(() => {
            errorElement.remove();
        }, 3000);
    }
});

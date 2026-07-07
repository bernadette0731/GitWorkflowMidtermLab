const modalOverlay = document.getElementById('modalOverlay');
const modalTriggers = document.querySelectorAll('.toggle-modal');
const themeBtn = document.getElementById('themeBtn');

// Modal toggle
modalTriggers.forEach(btn => btn.addEventListener('click', () => modalOverlay.classList.add('active')));
document.getElementById('closeModal').addEventListener('click', () => modalOverlay.classList.remove('active'));

// Theme Toggle
themeBtn.addEventListener('click', () => {
    document.documentElement.toggleAttribute('data-theme');
});
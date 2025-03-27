function toggleMode() {
    const body = document.body;
    const modeIcon = document.getElementById('mode-icon');
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        modeIcon.textContent = '☀️'; // Light mode icon
        localStorage.setItem('darkMode', 'false');
    } else {
        body.classList.add('dark-mode');
        modeIcon.textContent = '🌙'; // Dark mode icon
        localStorage.setItem('darkMode', 'true');
    }
}

// Check for saved user preference
document.addEventListener('DOMContentLoaded', function() {
    const darkModePreference = localStorage.getItem('darkMode');
    if (darkModePreference === 'true') {
        document.body.classList.add('dark-mode');
        document.getElementById('mode-icon').textContent = '🌙';
    }
});

// Add event listener to the toggle button
document.addEventListener('DOMContentLoaded', function() {
    const modeToggle = document.getElementById('mode-toggle');
    if (modeToggle) {
        modeToggle.addEventListener('click', toggleMode);
    }
});
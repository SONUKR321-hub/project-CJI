// Dark/Light mode toggle
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Mode';
document.body.appendChild(toggleButton);

// Function to toggle between dark and light mode
function toggleMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
}

// Event listener for toggle button
toggleButton.addEventListener('click', toggleMode);

// Add dark mode styles dynamically
const style = document.createElement('style');
style.innerHTML = `
.dark-mode {
  background-color: #1a1a1a;
  color: #ffffff;
}
.dark-mode .glass-effect {
  background: rgba(0, 0, 0, 0.7);
}
`;
document.head.appendChild(style);
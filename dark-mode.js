// dark-mode.js
document.addEventListener('DOMContentLoaded', () => {
                 const darkModeToggle = document.querySelector('.dark-mode-toggle');
                 const body = document.body;
                 
                 // Check for saved user preference
                 const savedMode = localStorage.getItem('movieflix-theme');
                 if (savedMode === 'light') {
                     body.classList.add('light-mode');
                 }
                 
                 // Toggle dark/light mode
                 darkModeToggle.addEventListener('click', () => {
                     body.classList.toggle('light-mode');
                     
                     // Save user preference
                     if (body.classList.contains('light-mode')) {
                         localStorage.setItem('movieflix-theme', 'light');
                     } else {
                         localStorage.setItem('movieflix-theme', 'dark');
                     }
                 });
             });
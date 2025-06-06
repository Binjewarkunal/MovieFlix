// loader.js
document.addEventListener('DOMContentLoaded', () => {
                 // Hide loader after 3 seconds
                 setTimeout(() => {
                     document.querySelector('.loader-container').style.opacity = '0';
                     document.querySelector('.main-content').style.display = 'block';
                     
                     // Remove loader from DOM after transition
                     setTimeout(() => {
                         document.querySelector('.loader-container').style.display = 'none';
                     }, 500);
                 }, 3000);
             });
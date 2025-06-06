// Additional video player functionality
document.addEventListener('DOMContentLoaded', () => {
                 const playerVideo = document.querySelector('.video-player video');
                 const playPauseBtn = document.querySelector('.play-pause');
                 const volumeSlider = document.querySelector('.volume-slider');
                 
                 // Update play/pause button based on video state
                 playerVideo.addEventListener('play', () => {
                     playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
                 });
                 
                 playerVideo.addEventListener('pause', () => {
                     playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
                 });
                 
                 // Update volume slider when video volume changes
                 playerVideo.addEventListener('volumechange', () => {
                     volumeSlider.value = playerVideo.volume;
                 });
                 
                 // Initialize volume
                 playerVideo.volume = volumeSlider.value;
                 
                 // Progress bar functionality could be added here
                 // Time update display could be added here
                 // More advanced controls could be implemented
             });
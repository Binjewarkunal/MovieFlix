// Sample movie data
const movieData = {
    bollywood: [
        {
            id: 1,
            title: "Pathaan",
            poster: "images/posters/pathaan.jpg",
            rating: 4.5,
            trailer: "videos/trailers/pathaan.mp4",
            movie: "videos/movies/pathaan.mp4",
            cast: [
                { name: "Shah Rukh Khan", photo: "images/cast/srk.jpg" },
                { name: "Deepika Padukone", photo: "images/cast/deepika.jpg" },
                { name: "John Abraham", photo: "images/cast/john.jpg" }
            ],
            story: "An Indian spy takes on the leader of a gang of mercenaries who have a heinous plot for his homeland. Paathan is forced to take matters into his own hands as he battles betrayal, espionage and vengeance."
        },
        // More Bollywood movies...
    ],
    southDubbed: [
        {
            id: 101,
            title: "KGF Chapter 2",
            poster: "images/posters/kgf2.jpg",
            rating: 4.8,
            trailer: "videos/trailers/kgf2.mp4",
            movie: "videos/movies/kgf2.mp4",
            cast: [
                { name: "Yash", photo: "images/cast/yash.jpg" },
                { name: "Sanjay Dutt", photo: "images/cast/sanjay.jpg" },
                { name: "Raveena Tandon", photo: "images/cast/raveena.jpg" }
            ],
            story: "Rocky, a young man, seeks power and wealth in order to fulfil a promise to his dying mother. His quest takes him to Mumbai, where he becomes involved with the notorious gold mafia."
        },
        // More South Dubbed movies...
    ],
    hollywood: [
        {
            id: 201,
            title: "Avatar: The Way of Water",
            poster: "images/posters/avatar2.jpg",
            rating: 4.7,
            trailer: "videos/trailers/avatar2.mp4",
            movie: "videos/movies/avatar2.mp4",
            cast: [
                { name: "Sam Worthington", photo: "images/cast/sam.jpg" },
                { name: "Zoe Saldana", photo: "images/cast/zoe.jpg" },
                { name: "Sigourney Weaver", photo: "images/cast/sigourney.jpg" }
            ],
            story: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home."
        },
        // More Hollywood movies...
    ],
    southOriginal: [
        {
            id: 301,
            title: "RRR",
            poster: "images/posters/rrr.jpg",
            rating: 4.9,
            trailer: "videos/trailers/rrr.mp4",
            movie: "videos/movies/rrr.mp4",
            cast: [
                { name: "N.T. Rama Rao Jr.", photo: "images/cast/ntr.jpg" },
                { name: "Ram Charan", photo: "images/cast/ram.jpg" },
                { name: "Alia Bhatt", photo: "images/cast/alia.jpg" }
            ],
            story: "A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in the 1920s."
        },
        // More South Original movies...
    ]
};

// DOM Elements
const movieSliders = {
    bollywood: document.querySelector('#bollywood .movie-slider'),
    southDubbed: document.querySelector('#south-dubbed .movie-slider'),
    hollywood: document.querySelector('#hollywood .movie-slider'),
    southOriginal: document.querySelector('#south-original .movie-slider')
};

const movieModal = document.querySelector('.movie-modal');
const modalContent = document.querySelector('.modal-content');
const modalTrailer = document.querySelector('.modal-trailer video');
const movieTitle = document.querySelector('.movie-title');
const movieCast = document.querySelector('.movie-cast');
const movieStory = document.querySelector('.movie-story');
const watchFullMovieBtn = document.querySelector('.watch-full-movie');
const closeModalBtn = document.querySelector('.close-modal');

const videoPlayer = document.querySelector('.video-player');
const playerVideo = document.querySelector('.video-player video');
const closePlayerBtn = document.querySelector('.close-player');
const playPauseBtn = document.querySelector('.play-pause');
const volumeSlider = document.querySelector('.volume-slider');
const fullscreenToggle = document.querySelector('.fullscreen-toggle');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Populate movie sliders
    populateMovieSliders();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('.navbar-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Close modal when clicking outside content
    movieModal.addEventListener('click', (e) => {
        if (e.target === movieModal) {
            closeMovieModal();
        }
    });
    
    // Close video player when clicking outside video
    videoPlayer.addEventListener('click', (e) => {
        if (e.target === videoPlayer) {
            closeVideoPlayer();
        }
    });
});

// Populate movie sliders with data
function populateMovieSliders() {
    for (const category in movieSliders) {
        movieData[category].forEach(movie => {
            const movieItem = createMovieElement(movie);
            movieSliders[category].appendChild(movieItem);
        });
    }
}

// Create movie element for slider
function createMovieElement(movie) {
    const movieItem = document.createElement('div');
    movieItem.className = 'movie-item';
    movieItem.dataset.id = movie.id;
    
    movieItem.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
        <div class="movie-overlay">
            <h3 class="movie-name">${movie.title}</h3>
            <div class="movie-rating">
                <i class="fas fa-star"></i>
                <span>${movie.rating}/5</span>
            </div>
            <button class="watch-btn">Watch</button>
        </div>
    `;
    
    // Add click event to watch button
    movieItem.querySelector('.watch-btn').addEventListener('click', () => {
        openMovieModal(movie);
    });
    
    return movieItem;
}

// Open movie modal with selected movie
function openMovieModal(movie) {
    // Set modal content
    modalTrailer.src = movie.trailer;
    movieTitle.textContent = movie.title;
    movieStory.textContent = movie.story;
    
    // Populate cast
    movieCast.innerHTML = '';
    movie.cast.forEach(castMember => {
        const castElement = document.createElement('div');
        castElement.className = 'cast-member';
        castElement.innerHTML = `
            <img src="${castMember.photo}" alt="${castMember.name}" class="cast-photo">
            <span class="cast-name">${castMember.name}</span>
        `;
        movieCast.appendChild(castElement);
    });
    
    // Set watch full movie button
    watchFullMovieBtn.onclick = () => {
        openVideoPlayer(movie.movie);
    };
    
    // Show modal
    movieModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Play trailer
    modalTrailer.play();
}

// Close movie modal
function closeMovieModal() {
    movieModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    modalTrailer.pause();
    modalTrailer.currentTime = 0;
}

// Open video player with selected movie
function openVideoPlayer(videoSrc) {
    playerVideo.src = videoSrc;
    videoPlayer.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Play video
    playerVideo.play();
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

// Close video player
function closeVideoPlayer() {
    videoPlayer.style.display = 'none';
    document.body.style.overflow = 'auto';
    playerVideo.pause();
    playerVideo.currentTime = 0;
}

// Video player controls
playPauseBtn.addEventListener('click', () => {
    if (playerVideo.paused) {
        playerVideo.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        playerVideo.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
});

volumeSlider.addEventListener('input', () => {
    playerVideo.volume = volumeSlider.value;
});

fullscreenToggle.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        videoPlayer.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable fullscreen: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
});

// Close buttons
closeModalBtn.addEventListener('click', closeMovieModal);
closePlayerBtn.addEventListener('click', closeVideoPlayer);

// Keyboard controls for video player
document.addEventListener('keydown', (e) => {
    if (videoPlayer.style.display === 'block') {
        switch (e.key) {
            case ' ':
                e.preventDefault();
                if (playerVideo.paused) {
                    playerVideo.play();
                    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
                } else {
                    playerVideo.pause();
                    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
                }
                break;
            case 'ArrowLeft':
                playerVideo.currentTime -= 5;
                break;
            case 'ArrowRight':
                playerVideo.currentTime += 5;
                break;
            case 'ArrowUp':
                playerVideo.volume = Math.min(playerVideo.volume + 0.1, 1);
                volumeSlider.value = playerVideo.volume;
                break;
            case 'ArrowDown':
                playerVideo.volume = Math.max(playerVideo.volume - 0.1, 0);
                volumeSlider.value = playerVideo.volume;
                break;
            case 'f':
                if (!document.fullscreenElement) {
                    videoPlayer.requestFullscreen();
                } else {
                    document.exitFullscreen();
                }
                break;
            case 'Escape':
                if (document.fullscreenElement) {
                    document.exitFullscreen();
                } else {
                    closeVideoPlayer();
                }
                break;
        }
    } else if (movieModal.style.display === 'block' && e.key === 'Escape') {
        closeMovieModal();
    }
});

// Handle fullscreen change
document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
        fullscreenToggle.innerHTML = '<i class="fas fa-compress"></i>';
    } else {
        fullscreenToggle.innerHTML = '<i class="fas fa-expand"></i>';
    }
});
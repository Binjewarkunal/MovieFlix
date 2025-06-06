// DOM Elements
const loader = document.querySelector('.loader');
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const movieSliders = document.querySelectorAll('.movie-slider');
const movieModal = document.querySelector('.movie-modal');
const closeModal = document.querySelector('.close-modal');
const fullscreenPlayer = document.querySelector('.fullscreen-player');
const backBtn = document.querySelector('.back-btn');
const fullscreenBtn = document.querySelector('.fullscreen-btn');
const volumeBtn = document.querySelector('.volume-btn');
const volumeSlider = document.querySelector('.volume-slider');
const movieVideo = document.querySelector('.movie-video');
const prevBtns = document.querySelectorAll('.prev');
const nextBtns = document.querySelectorAll('.next');
const heroScroll = document.querySelector('.hero-scroll');

// Movie Data
const movies = {
    bollywood: [
        {
            id: 1,
            title: 'Pathaan',
            poster: 'https://m.media-amazon.com/images/M/MV5BM2QzM2JiNTMtYjU4Ny00MDZkLTk3MmUtYTRjMzVkZGJlNmYyXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_FMjpg_UX1000_.jpg',
            rating: 7.5,
            year: 2023,
            duration: '2h 26m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'Pathaan, an exiled RAW agent, works with ISI agent Rubina Mohsin to take down Jim, a former RAW agent who plans to attack India with a deadly virus.',
            cast: [
                { name: 'Shah Rukh Khan', photo: 'https://m.media-amazon.com/images/M/MV5BZDk1ZmU0NGYtMzQ2Yi00N2NjLTkyNWEtZWE2NTU4NTJiZGUzXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_.jpg' },
                { name: 'Deepika Padukone', photo: 'https://m.media-amazon.com/images/M/MV5BZGFmMjU3YzMtMjU0NC00YzBjLWEwZTMtMDUyZGVmMjhmOGQ4XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg' },
                { name: 'John Abraham', photo: 'https://m.media-amazon.com/images/M/MV5BMTU4NTM1MTExOF5BMl5BanBnXkFtZTcwMjYyNjQyNA@@._V1_.jpg' },
                { name: 'Dimple Kapadia', photo: 'https://m.media-amazon.com/images/M/MV5BMTY1NDYxNjE1MV5BMl5BanBnXkFtZTcwMTQ1MjQxMw@@._V1_.jpg' }
            ]
        },
        {
            id: 2,
            title: 'Brahmāstra',
            poster: 'https://m.media-amazon.com/images/M/MV5BOWJkNzU0Y2MtYzU5YS00ZTI0LWIyZjItYzBiYmQyYzIzN2I1XkEyXkFqcGdeQXVyNjE1OTQ0NjM@._V1_.jpg',
            rating: 6.8,
            year: 2022,
            duration: '2h 47m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'A young man on the brink of love with a woman discovers he has a connection to the divine energy of the universe and must protect it from dark forces.',
            cast: [
                { name: 'Ranbir Kapoor', photo: 'https://m.media-amazon.com/images/M/MV5BOTU0MzU0NTEzMV5BMl5BanBnXkFtZTcwMzYyNjQyNA@@._V1_.jpg' },
                { name: 'Alia Bhatt', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Amitabh Bachchan', photo: 'https://m.media-amazon.com/images/M/MV5BZDA1MzRlYjItYzhiZS00YTBkLTk0OTQtOGY1NTAwYjVjZDVjXkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_.jpg' },
                { name: 'Mouni Roy', photo: 'https://m.media-amazon.com/images/M/MV5BMTQ5OTY1OTk0Ml5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' }
            ]
        },
        {
            id: 3,
            title: 'KGF: Chapter 2',
            poster: 'https://m.media-amazon.com/images/M/MV5BMjMwMDgyOGQtMWZjNC00MDUwLTllZDYtZWM3NDBmN2YzNGZmXkEyXkFqcGdeQXVyMTQzNTA5MzYz._V1_.jpg',
            rating: 8.5,
            year: 2022,
            duration: '2h 48m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'Rocky takes control of the Kolar Gold Fields and his newfound power makes the government as well as his enemies jittery. However, he still has to confront Ramika Sen.',
            cast: [
                { name: 'Yash', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Sanjay Dutt', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Raveena Tandon', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Srinidhi Shetty', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' }
            ]
        },
        {
            id: 4,
            title: 'RRR',
            poster: 'https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg',
            rating: 8.0,
            year: 2022,
            duration: '3h 7m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'A fictional story about two legendary revolutionaries and their journey away from home before they started fighting for their country in the 1920s.',
            cast: [
                { name: 'N.T. Rama Rao Jr.', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Ram Charan', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Alia Bhatt', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Ajay Devgn', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' }
            ]
        },
        {
            id: 5,
            title: 'Dangal',
            poster: 'https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_.jpg',
            rating: 8.9,
            year: 2016,
            duration: '2h 41m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'Former wrestler Mahavir Singh Phogat trains his daughters Geeta and Babita to become India\'s first world-class female wrestlers.',
            cast: [
                { name: 'Aamir Khan', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Sakshi Tanwar', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Fatima Sana Shaikh', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Sanya Malhotra', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' }
            ]
        },
        {
            id: 6,
            title: '3 Idiots',
            poster: 'https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
            rating: 9.1,
            year: 2009,
            duration: '2h 50m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently.',
            cast: [
                { name: 'Aamir Khan', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'R. Madhavan', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Sharman Joshi', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Kareena Kapoor', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' }
            ]
        }
    ],
    southHindi: [
        {
            id: 7,
            title: 'Pushpa: The Rise',
            poster: 'https://m.media-amazon.com/images/M/MV5BMTY4ODk0OTU3N15BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg',
            rating: 7.6,
            year: 2021,
            duration: '2h 59m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'A laborer rises through the ranks of a smuggling syndicate, making enemies along the way as he becomes a powerful figure in the red sandalwood trade.',
            cast: [
                { name: 'Allu Arjun', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Rashmika Mandanna', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Fahadh Faasil', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Sunil', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' }
            ]
        },
        {
            id: 8,
            title: 'Baahubali 2: The Conclusion',
            poster: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg',
            rating: 8.9,
            year: 2017,
            duration: '2h 47m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers. His story is juxtaposed with past events that unfolded in the Mahishmati Kingdom.',
            cast: [
                { name: 'Prabhas', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Rana Daggubati', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Anushka Shetty', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Tamannaah', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' }
            ]
        },
        {
            id: 9,
            title: 'Kantara',
            poster: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg',
            rating: 8.7,
            year: 2022,
            duration: '2h 28m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'A human and nature conflict in a village, with a local demigod, traditions and culture clashing with modern laws enforced by a forest officer.',
            cast: [
                { name: 'Rishab Shetty', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Sapthami Gowda', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Kishore', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Achyuth Kumar', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' }
            ]
        },
        {
            id: 10,
            title: 'Vikram',
            poster: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg',
            rating: 8.4,
            year: 2022,
            duration: '2h 53m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'A special agent investigates a murder committed by a masked group of serial killers. However, a tangled maze of clues soon leads him to the drug kingpin.',
            cast: [
                { name: 'Kamal Haasan', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Vijay Sethupathi', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Fahadh Faasil', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Narain', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' }
            ]
        },
        {
            id: 11,
            title: 'Baahubali: The Beginning',
            poster: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg',
            rating: 8.5,
            year: 2015,
            duration: '2h 39m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'In ancient India, an adventurous and daring man becomes involved in a decades-old feud between two warring peoples.',
            cast: [
                { name: 'Prabhas', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Rana Daggubati', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Anushka Shetty', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Tamannaah', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' }
            ]
        },
        {
            id: 12,
            title: 'Salaar: Part 1 - Ceasefire',
            poster: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg',
            rating: 8.3,
            year: 2023,
            duration: '2h 55m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'A gang leader tries to keep a promise made to his dying friend and takes on the other criminal gangs.',
            cast: [
                { name: 'Prabhas', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Prithviraj Sukumaran', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Shruti Haasan', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Jagapathi Babu', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' }
            ]
        }
    ],
    hollywood: [
        {
            id: 13,
            title: 'Avengers: Endgame',
            poster: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg',
            rating: 8.9,
            year: 2019,
            duration: '3h 1m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more to reverse Thanos\' actions.',
            cast: [
                { name: 'Robert Downey Jr.', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Chris Evans', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Mark Ruffalo', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Scarlett Johansson', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' }
            ]
        },
        {
            id: 14,
            title: 'The Dark Knight',
            poster: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg',
            rating: 9.3,
            year: 2008,
            duration: '2h 32m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.',
            cast: [
                { name: 'Christian Bale', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Heath Ledger', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Aaron Eckhart', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Michael Caine', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' }
            ]
        },
        {
            id: 15,
            title: 'Inception',
            poster: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg',
            rating: 9.0,
            year: 2010,
            duration: '2h 28m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
            cast: [
                { name: 'Leonardo DiCaprio', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Joseph Gordon-Levitt', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Ellen Page', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Tom Hardy', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' }
            ]
        },
        {
            id: 16,
            title: 'Interstellar',
            poster: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg',
            rating: 8.9,
            year: 2014,
            duration: '2h 49m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
            cast: [
                { name: 'Matthew McConaughey', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Anne Hathaway', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Jessica Chastain', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Michael Caine', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' }
            ]
        },
        {
            id: 17,
            title: 'The Shawshank Redemption',
            poster: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg',
            rating: 9.5,
            year: 1994,
            duration: '2h 22m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
            cast: [
                { name: 'Tim Robbins', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Morgan Freeman', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Bob Gunton', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'William Sadler', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' }
            ]
        },
        {
            id: 18,
            title: 'The Godfather',
            poster: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg',
            rating: 9.4,
            year: 1972,
            duration: '2h 55m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
            cast: [
                { name: 'Marlon Brando', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Al Pacino', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'James Caan', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Robert Duvall', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' }
            ]
        }
    ],
    southOriginal: [
        {
            id: 19,
            title: 'KGF: Chapter 1',
            poster: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg',
            rating: 8.7,
            year: 2018,
            duration: '2h 35m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'In the 1970s, a gangster goes undercover as a slave to assassinate the owner of a gold mine in the Kolar Gold Fields.',
            cast: [
                { name: 'Yash', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Srinidhi Shetty', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Ramachandra Raju', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Anant Nag', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' }
            ]
        },
        {
            id: 20,
            title: 'RRR (Telugu)',
            poster: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg',
            rating: 8.2,
            year: 2022,
            duration: '3h 7m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'A fictional story about two legendary revolutionaries and their journey away from home before they started fighting for their country in the 1920s.',
            cast: [
                { name: 'N.T. Rama Rao Jr.', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Ram Charan', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Alia Bhatt', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Ajay Devgn', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' }
            ]
        },
        {
            id: 21,
            title: 'Kantara (Kannada)',
            poster: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg',
            rating: 8.9,
            year: 2022,
            duration: '2h 28m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'A human and nature conflict in a village, with a local demigod, traditions and culture clashing with modern laws enforced by a forest officer.',
            cast: [
                { name: 'Rishab Shetty', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Sapthami Gowda', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Kishore', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Achyuth Kumar', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' }
            ]
        },
        {
            id: 22,
            title: 'Vikram (Tamil)',
            poster: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg',
            rating: 8.6,
            year: 2022,
            duration: '2h 53m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'A special agent investigates a murder committed by a masked group of serial killers. However, a tangled maze of clues soon leads him to the drug kingpin.',
            cast: [
                { name: 'Kamal Haasan', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Vijay Sethupathi', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Fahadh Faasil', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Narain', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' }
            ]
        },
        {
            id: 23,
            title: 'Baahubali (Telugu)',
            poster: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg',
            rating: 8.7,
            year: 2015,
            duration: '2h 39m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'In ancient India, an adventurous and daring man becomes involved in a decades-old feud between two warring peoples.',
            cast: [
                { name: 'Prabhas', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Rana Daggubati', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Anushka Shetty', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Tamannaah', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' }
            ]
        },
        {
            id: 24,
            title: 'Pushpa (Telugu)',
            poster: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg',
            rating: 7.8,
            year: 2021,
            duration: '2h 59m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'A laborer rises through the ranks of a smuggling syndicate, making enemies along the way as he becomes a powerful figure in the red sandalwood trade.',
            cast: [
                { name: 'Allu Arjun', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Rashmika Mandanna', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Fahadh Faasil', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' },
                { name: 'Sunil', photo: 'https://m.media-amazon.com/images/M/MV5BMTU0NjYzMjEyMF5BMl5BanBnXkFtZTgwOTYxNjc1MDI@._V1_.jpg' }
            ]
        }
    ]
};

// Initialize the website
function init() {
    // Hide loader after 3 seconds
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 3000);

    // Load movies
    loadMovies();

    // Set up event listeners
    setupEventListeners();

    // Set initial theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', savedTheme);
    updateThemeToggle(savedTheme);

    // Add scroll event for navbar
    window.addEventListener('scroll', handleScroll);
}

// Load movies into sliders
function loadMovies() {
    const bollywoodSlider = document.querySelector('#bollywood .movie-slider');
    const southHindiSlider = document.querySelector('#south-hindi .movie-slider');
    const hollywoodSlider = document.querySelector('#hollywood .movie-slider');
    const southOriginalSlider = document.querySelector('#south-original .movie-slider');

    // Load Bollywood movies
    movies.bollywood.forEach(movie => {
        bollywoodSlider.appendChild(createMovieCard(movie));
    });

    // Load South Hindi Dubbed movies
    movies.southHindi.forEach(movie => {
        southHindiSlider.appendChild(createMovieCard(movie));
    });

    // Load Hollywood movies
    movies.hollywood.forEach(movie => {
        hollywoodSlider.appendChild(createMovieCard(movie));
    });

    // Load South Original Language movies
    movies.southOriginal.forEach(movie => {
        southOriginalSlider.appendChild(createMovieCard(movie));
    });

    // Initialize sliders
    initSliders();
}

// Create movie card element
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.dataset.id = movie.id;

    card.innerHTML = `
        <div class="movie-poster">
            <img src="${movie.poster}" alt="${movie.title}" loading="lazy">
            <div class="movie-overlay"></div>
        </div>
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <div class="movie-rating">
                <i class="fas fa-star"></i> ${movie.rating}
            </div>
        </div>
        <button class="watch-btn">
            <i class="fas fa-play"></i>
            <span>Watch</span>
        </button>
    `;

    return card;
}

// Initialize sliders with touch support
function initSliders() {
    const sliders = document.querySelectorAll('.movie-slider');
    
    sliders.forEach(slider => {
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });

        // Touch events for mobile
        slider.addEventListener('touchstart', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.touches[0].pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('touchend', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('touchmove', (e) => {
            if(!isDown) return;
            const x = e.touches[0].pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });
    });
}

// Set up event listeners
function setupEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);

    // Hamburger menu
    hamburger.addEventListener('click', toggleMenu);

    // Close modal
    closeModal.addEventListener('click', closeMovieModal);

    // Back button in fullscreen player
    backBtn.addEventListener('click', exitFullscreenPlayer);

    // Fullscreen button in fullscreen player
    fullscreenBtn.addEventListener('click', toggleFullscreen);

    // Volume control
    volumeSlider.addEventListener('input', (e) => {
        movieVideo.volume = e.target.value;
        if (movieVideo.volume === '0') {
            volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        } else {
            volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        }
    });

    // Watch buttons
    document.addEventListener('click', function(e) {
        if (e.target.closest('.watch-btn')) {
            const movieCard = e.target.closest('.movie-card');
            const movieId = parseInt(movieCard.dataset.id);
            openMovieModal(movieId);
        }
    });

    // Watch movie button in modal
    document.addEventListener('click', function(e) {
        if (e.target.closest('.watch-movie-btn')) {
            const modal = e.target.closest('.movie-modal');
            const movieId = parseInt(modal.querySelector('.modal-container').dataset.id);
            openFullscreenPlayer(movieId);
        }
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === movieModal) {
            closeMovieModal();
        }
    });

    // Close fullscreen player when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === fullscreenPlayer && !e.target.closest('.player-header')) {
            exitFullscreenPlayer();
        }
    });

    // Keyboard events
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (movieModal.classList.contains('active')) {
                closeMovieModal();
            }
            if (fullscreenPlayer.classList.contains('active')) {
                exitFullscreenPlayer();
            }
        }
    });

    // Hero scroll button
    heroScroll.addEventListener('click', () => {
        document.querySelector('.main-content').scrollIntoView({ behavior: 'smooth' });
    });

    // Slider navigation buttons
    prevBtns.forEach(btn => {
        btn.addEventListener('click', slideLeft);
    });

    nextBtns.forEach(btn => {
        btn.addEventListener('click', slideRight);
    });
}

// Handle scroll for navbar effect
function handleScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Toggle theme between dark and light
function toggleTheme() {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeToggle(newTheme);
}

// Update theme toggle icon
function updateThemeToggle(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'light') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Toggle mobile menu
function toggleMenu() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    if (navLinks.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// Open movie modal
function openMovieModal(movieId) {
    // Find the movie in our data
    let movie = null;
    let category = null;

    // Check all categories for the movie
    for (const cat in movies) {
        const foundMovie = movies[cat].find(m => m.id === movieId);
        if (foundMovie) {
            movie = foundMovie;
            category = cat;
            break;
        }
    }

    if (!movie) return;

    // Update modal content
    const modalContainer = document.querySelector('.modal-container');
    modalContainer.dataset.id = movie.id;

    document.querySelector('.movie-title').textContent = movie.title;
    document.querySelector('.rating-value').textContent = movie.rating;
    document.querySelector('.year-value').textContent = movie.year;
    document.querySelector('.duration-value').textContent = movie.duration;
    document.querySelector('.story-text').textContent = movie.story;

    // Set trailer video source
    const trailerVideo = document.querySelector('.trailer-video');
    trailerVideo.src = movie.trailer;
    trailerVideo.muted = true;
    trailerVideo.play().catch(e => console.log('Autoplay prevented:', e));

    // Update cast
    const castContainer = document.querySelector('.cast-container');
    castContainer.innerHTML = '';

    movie.cast.forEach(actor => {
        const castMember = document.createElement('div');
        castMember.className = 'cast-member';
        castMember.innerHTML = `
            <img src="${actor.photo}" alt="${actor.name}" class="cast-photo" loading="lazy">
            <p class="cast-name">${actor.name}</p>
        `;
        castContainer.appendChild(castMember);
    });

    // Show modal
    movieModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close movie modal
function closeMovieModal() {
    const trailerVideo = document.querySelector('.trailer-video');
    trailerVideo.pause();
    trailerVideo.currentTime = 0;
    
    movieModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Open fullscreen player
function openFullscreenPlayer(movieId) {
    // Find the movie in our data
    let movie = null;

    // Check all categories for the movie
    for (const cat in movies) {
        const foundMovie = movies[cat].find(m => m.id === movieId);
        if (foundMovie) {
            movie = foundMovie;
            break;
        }
    }

    if (!movie) return;

    // Set video source and title
    movieVideo.src = movie.video;
    document.querySelector('.player-title').textContent = movie.title;
    
    // Set initial volume
    movieVideo.volume = volumeSlider.value;

    // Show fullscreen player
    fullscreenPlayer.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Play video
    movieVideo.play().catch(e => {
        console.log('Autoplay prevented:', e);
        // Show play button if autoplay is blocked
        const playBtn = document.createElement('button');
        playBtn.className = 'play-btn';
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
        playBtn.addEventListener('click', () => {
            movieVideo.play();
            playBtn.remove();
        });
        fullscreenPlayer.appendChild(playBtn);
    });

    // Close modal if open
    closeMovieModal();
}

// Exit fullscreen player
function exitFullscreenPlayer() {
    movieVideo.pause();
    movieVideo.currentTime = 0;
    
    fullscreenPlayer.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Toggle fullscreen mode
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        fullscreenPlayer.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable fullscreen: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}

// Slide movie slider left
function slideLeft(e) {
    const sliderContainer = e.target.closest('.movie-container');
    const slider = sliderContainer.querySelector('.movie-slider');
    const scrollAmount = slider.clientWidth * 0.8;
    
    slider.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
}

// Slide movie slider right
function slideRight(e) {
    const sliderContainer = e.target.closest('.movie-container');
    const slider = sliderContainer.querySelector('.movie-slider');
    const scrollAmount = slider.clientWidth * 0.8;
    
    slider.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

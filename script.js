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
const muteBtn = document.querySelector('.mute-btn');
const movieVideo = document.querySelector('.movie-video');
const prevBtns = document.querySelectorAll('.prev');
const nextBtns = document.querySelectorAll('.next');

// Movie Data
const movies = {
    bollywood: [
        {
            id: 1,
            title: 'Pathaan',
            poster: 'https://via.placeholder.com/300x450?text=Pathaan',
            rating: 7.5,
            year: 2023,
            duration: '2h 26m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'Pathaan, an exiled RAW agent, works with ISI agent Rubina Mohsin to take down Jim, a former RAW agent who plans to attack India with a deadly virus.',
            cast: [
                { name: 'Shah Rukh Khan', photo: 'https://via.placeholder.com/100x100?text=SRK' },
                { name: 'Deepika Padukone', photo: 'https://via.placeholder.com/100x100?text=Deepika' },
                { name: 'John Abraham', photo: 'https://via.placeholder.com/100x100?text=John' },
                { name: 'Dimple Kapadia', photo: 'https://via.placeholder.com/100x100?text=Dimple' }
            ]
        },
        {
            id: 2,
            title: 'Brahmāstra',
            poster: 'https://via.placeholder.com/300x450?text=Brahmastra',
            rating: 6.8,
            year: 2022,
            duration: '2h 47m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'A young man on the brink of love with a woman discovers he has a connection to the divine energy of the universe and must protect it from dark forces.',
            cast: [
                { name: 'Ranbir Kapoor', photo: 'https://via.placeholder.com/100x100?text=Ranbir' },
                { name: 'Alia Bhatt', photo: 'https://via.placeholder.com/100x100?text=Alia' },
                { name: 'Amitabh Bachchan', photo: 'https://via.placeholder.com/100x100?text=Amitabh' },
                { name: 'Mouni Roy', photo: 'https://via.placeholder.com/100x100?text=Mouni' }
            ]
        },
        {
            id: 3,
            title: 'KGF: Chapter 2',
            poster: 'https://via.placeholder.com/300x450?text=KGF2',
            rating: 8.5,
            year: 2022,
            duration: '2h 48m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'Rocky takes control of the Kolar Gold Fields and his newfound power makes the government as well as his enemies jittery. However, he still has to confront Ramika Sen.',
            cast: [
                { name: 'Yash', photo: 'https://via.placeholder.com/100x100?text=Yash' },
                { name: 'Sanjay Dutt', photo: 'https://via.placeholder.com/100x100?text=Sanjay' },
                { name: 'Raveena Tandon', photo: 'https://via.placeholder.com/100x100?text=Raveena' },
                { name: 'Srinidhi Shetty', photo: 'https://via.placeholder.com/100x100?text=Srinidhi' }
            ]
        },
        {
            id: 4,
            title: 'RRR',
            poster: 'https://via.placeholder.com/300x450?text=RRR',
            rating: 8.0,
            year: 2022,
            duration: '3h 7m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'A fictional story about two legendary revolutionaries and their journey away from home before they started fighting for their country in the 1920s.',
            cast: [
                { name: 'N.T. Rama Rao Jr.', photo: 'https://via.placeholder.com/100x100?text=NTR' },
                { name: 'Ram Charan', photo: 'https://via.placeholder.com/100x100?text=Ram' },
                { name: 'Alia Bhatt', photo: 'https://via.placeholder.com/100x100?text=Alia' },
                { name: 'Ajay Devgn', photo: 'https://via.placeholder.com/100x100?text=Ajay' }
            ]
        },
        {
            id: 5,
            title: 'Dangal',
            poster: 'https://via.placeholder.com/300x450?text=Dangal',
            rating: 8.9,
            year: 2016,
            duration: '2h 41m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'Former wrestler Mahavir Singh Phogat trains his daughters Geeta and Babita to become India\'s first world-class female wrestlers.',
            cast: [
                { name: 'Aamir Khan', photo: 'https://via.placeholder.com/100x100?text=Aamir' },
                { name: 'Sakshi Tanwar', photo: 'https://via.placeholder.com/100x100?text=Sakshi' },
                { name: 'Fatima Sana Shaikh', photo: 'https://via.placeholder.com/100x100?text=Fatima' },
                { name: 'Sanya Malhotra', photo: 'https://via.placeholder.com/100x100?text=Sanya' }
            ]
        },
        {
            id: 6,
            title: '3 Idiots',
            poster: 'https://via.placeholder.com/300x450?text=3+Idiots',
            rating: 9.1,
            year: 2009,
            duration: '2h 50m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently.',
            cast: [
                { name: 'Aamir Khan', photo: 'https://via.placeholder.com/100x100?text=Aamir' },
                { name: 'R. Madhavan', photo: 'https://via.placeholder.com/100x100?text=Madhavan' },
                { name: 'Sharman Joshi', photo: 'https://via.placeholder.com/100x100?text=Sharman' },
                { name: 'Kareena Kapoor', photo: 'https://via.placeholder.com/100x100?text=Kareena' }
            ]
        }
    ],
    southHindi: [
        {
            id: 7,
            title: 'Pushpa: The Rise',
            poster: 'https://via.placeholder.com/300x450?text=Pushpa',
            rating: 7.6,
            year: 2021,
            duration: '2h 59m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'A laborer rises through the ranks of a smuggling syndicate, making enemies along the way as he becomes a powerful figure in the red sandalwood trade.',
            cast: [
                { name: 'Allu Arjun', photo: 'https://via.placeholder.com/100x100?text=Allu' },
                { name: 'Rashmika Mandanna', photo: 'https://via.placeholder.com/100x100?text=Rashmika' },
                { name: 'Fahadh Faasil', photo: 'https://via.placeholder.com/100x100?text=Fahadh' },
                { name: 'Sunil', photo: 'https://via.placeholder.com/100x100?text=Sunil' }
            ]
        },
        {
            id: 8,
            title: 'Baahubali 2: The Conclusion',
            poster: 'https://via.placeholder.com/300x450?text=Baahubali2',
            rating: 8.9,
            year: 2017,
            duration: '2h 47m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers. His story is juxtaposed with past events that unfolded in the Mahishmati Kingdom.',
            cast: [
                { name: 'Prabhas', photo: 'https://via.placeholder.com/100x100?text=Prabhas' },
                { name: 'Rana Daggubati', photo: 'https://via.placeholder.com/100x100?text=Rana' },
                { name: 'Anushka Shetty', photo: 'https://via.placeholder.com/100x100?text=Anushka' },
                { name: 'Tamannaah', photo: 'https://via.placeholder.com/100x100?text=Tamannaah' }
            ]
        },
        {
            id: 9,
            title: 'Kantara',
            poster: 'https://via.placeholder.com/300x450?text=Kantara',
            rating: 8.7,
            year: 2022,
            duration: '2h 28m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'A human and nature conflict in a village, with a local demigod, traditions and culture clashing with modern laws enforced by a forest officer.',
            cast: [
                { name: 'Rishab Shetty', photo: 'https://via.placeholder.com/100x100?text=Rishab' },
                { name: 'Sapthami Gowda', photo: 'https://via.placeholder.com/100x100?text=Sapthami' },
                { name: 'Kishore', photo: 'https://via.placeholder.com/100x100?text=Kishore' },
                { name: 'Achyuth Kumar', photo: 'https://via.placeholder.com/100x100?text=Achyuth' }
            ]
        },
        {
            id: 10,
            title: 'Vikram',
            poster: 'https://via.placeholder.com/300x450?text=Vikram',
            rating: 8.4,
            year: 2022,
            duration: '2h 53m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'A special agent investigates a murder committed by a masked group of serial killers. However, a tangled maze of clues soon leads him to the drug kingpin.',
            cast: [
                { name: 'Kamal Haasan', photo: 'https://via.placeholder.com/100x100?text=Kamal' },
                { name: 'Vijay Sethupathi', photo: 'https://via.placeholder.com/100x100?text=Vijay' },
                { name: 'Fahadh Faasil', photo: 'https://via.placeholder.com/100x100?text=Fahadh' },
                { name: 'Narain', photo: 'https://via.placeholder.com/100x100?text=Narain' }
            ]
        },
        {
            id: 11,
            title: 'Baahubali: The Beginning',
            poster: 'https://via.placeholder.com/300x450?text=Baahubali1',
            rating: 8.5,
            year: 2015,
            duration: '2h 39m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'In ancient India, an adventurous and daring man becomes involved in a decades-old feud between two warring peoples.',
            cast: [
                { name: 'Prabhas', photo: 'https://via.placeholder.com/100x100?text=Prabhas' },
                { name: 'Rana Daggubati', photo: 'https://via.placeholder.com/100x100?text=Rana' },
                { name: 'Anushka Shetty', photo: 'https://via.placeholder.com/100x100?text=Anushka' },
                { name: 'Tamannaah', photo: 'https://via.placeholder.com/100x100?text=Tamannaah' }
            ]
        },
        {
            id: 12,
            title: 'Salaar: Part 1 - Ceasefire',
            poster: 'https://via.placeholder.com/300x450?text=Salaar',
            rating: 8.3,
            year: 2023,
            duration: '2h 55m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'A gang leader tries to keep a promise made to his dying friend and takes on the other criminal gangs.',
            cast: [
                { name: 'Prabhas', photo: 'https://via.placeholder.com/100x100?text=Prabhas' },
                { name: 'Prithviraj Sukumaran', photo: 'https://via.placeholder.com/100x100?text=Prithviraj' },
                { name: 'Shruti Haasan', photo: 'https://via.placeholder.com/100x100?text=Shruti' },
                { name: 'Jagapathi Babu', photo: 'https://via.placeholder.com/100x100?text=Jagapathi' }
            ]
        }
    ],
    hollywood: [
        {
            id: 13,
            title: 'Avengers: Endgame',
            poster: 'https://via.placeholder.com/300x450?text=Avengers',
            rating: 8.9,
            year: 2019,
            duration: '3h 1m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more to reverse Thanos\' actions.',
            cast: [
                { name: 'Robert Downey Jr.', photo: 'https://via.placeholder.com/100x100?text=Robert' },
                { name: 'Chris Evans', photo: 'https://via.placeholder.com/100x100?text=Chris' },
                { name: 'Mark Ruffalo', photo: 'https://via.placeholder.com/100x100?text=Mark' },
                { name: 'Scarlett Johansson', photo: 'https://via.placeholder.com/100x100?text=Scarlett' }
            ]
        },
        {
            id: 14,
            title: 'The Dark Knight',
            poster: 'https://via.placeholder.com/300x450?text=Dark+Knight',
            rating: 9.3,
            year: 2008,
            duration: '2h 32m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.',
            cast: [
                { name: 'Christian Bale', photo: 'https://via.placeholder.com/100x100?text=Christian' },
                { name: 'Heath Ledger', photo: 'https://via.placeholder.com/100x100?text=Heath' },
                { name: 'Aaron Eckhart', photo: 'https://via.placeholder.com/100x100?text=Aaron' },
                { name: 'Michael Caine', photo: 'https://via.placeholder.com/100x100?text=Michael' }
            ]
        },
        {
            id: 15,
            title: 'Inception',
            poster: 'https://via.placeholder.com/300x450?text=Inception',
            rating: 9.0,
            year: 2010,
            duration: '2h 28m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
            cast: [
                { name: 'Leonardo DiCaprio', photo: 'https://via.placeholder.com/100x100?text=Leonardo' },
                { name: 'Joseph Gordon-Levitt', photo: 'https://via.placeholder.com/100x100?text=Joseph' },
                { name: 'Ellen Page', photo: 'https://via.placeholder.com/100x100?text=Ellen' },
                { name: 'Tom Hardy', photo: 'https://via.placeholder.com/100x100?text=Tom' }
            ]
        },
        {
            id: 16,
            title: 'Interstellar',
            poster: 'https://via.placeholder.com/300x450?text=Interstellar',
            rating: 8.9,
            year: 2014,
            duration: '2h 49m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
            cast: [
                { name: 'Matthew McConaughey', photo: 'https://via.placeholder.com/100x100?text=Matthew' },
                { name: 'Anne Hathaway', photo: 'https://via.placeholder.com/100x100?text=Anne' },
                { name: 'Jessica Chastain', photo: 'https://via.placeholder.com/100x100?text=Jessica' },
                { name: 'Michael Caine', photo: 'https://via.placeholder.com/100x100?text=Michael' }
            ]
        },
        {
            id: 17,
            title: 'The Shawshank Redemption',
            poster: 'https://via.placeholder.com/300x450?text=Shawshank',
            rating: 9.5,
            year: 1994,
            duration: '2h 22m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
            cast: [
                { name: 'Tim Robbins', photo: 'https://via.placeholder.com/100x100?text=Tim' },
                { name: 'Morgan Freeman', photo: 'https://via.placeholder.com/100x100?text=Morgan' },
                { name: 'Bob Gunton', photo: 'https://via.placeholder.com/100x100?text=Bob' },
                { name: 'William Sadler', photo: 'https://via.placeholder.com/100x100?text=William' }
            ]
        },
        {
            id: 18,
            title: 'The Godfather',
            poster: 'https://via.placeholder.com/300x450?text=Godfather',
            rating: 9.4,
            year: 1972,
            duration: '2h 55m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
            cast: [
                { name: 'Marlon Brando', photo: 'https://via.placeholder.com/100x100?text=Marlon' },
                { name: 'Al Pacino', photo: 'https://via.placeholder.com/100x100?text=Al' },
                { name: 'James Caan', photo: 'https://via.placeholder.com/100x100?text=James' },
                { name: 'Robert Duvall', photo: 'https://via.placeholder.com/100x100?text=Robert' }
            ]
        }
    ],
    southOriginal: [
        {
            id: 19,
            title: 'KGF: Chapter 1',
            poster: 'https://via.placeholder.com/300x450?text=KGF1',
            rating: 8.7,
            year: 2018,
            duration: '2h 35m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'In the 1970s, a gangster goes undercover as a slave to assassinate the owner of a gold mine in the Kolar Gold Fields.',
            cast: [
                { name: 'Yash', photo: 'https://via.placeholder.com/100x100?text=Yash' },
                { name: 'Srinidhi Shetty', photo: 'https://via.placeholder.com/100x100?text=Srinidhi' },
                { name: 'Ramachandra Raju', photo: 'https://via.placeholder.com/100x100?text=Ramachandra' },
                { name: 'Anant Nag', photo: 'https://via.placeholder.com/100x100?text=Anant' }
            ]
        },
        {
            id: 20,
            title: 'RRR (Telugu)',
            poster: 'https://via.placeholder.com/300x450?text=RRR+Telugu',
            rating: 8.2,
            year: 2022,
            duration: '3h 7m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'A fictional story about two legendary revolutionaries and their journey away from home before they started fighting for their country in the 1920s.',
            cast: [
                { name: 'N.T. Rama Rao Jr.', photo: 'https://via.placeholder.com/100x100?text=NTR' },
                { name: 'Ram Charan', photo: 'https://via.placeholder.com/100x100?text=Ram' },
                { name: 'Alia Bhatt', photo: 'https://via.placeholder.com/100x100?text=Alia' },
                { name: 'Ajay Devgn', photo: 'https://via.placeholder.com/100x100?text=Ajay' }
            ]
        },
        {
            id: 21,
            title: 'Kantara (Kannada)',
            poster: 'https://via.placeholder.com/300x450?text=Kantara+Kannada',
            rating: 8.9,
            year: 2022,
            duration: '2h 28m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'A human and nature conflict in a village, with a local demigod, traditions and culture clashing with modern laws enforced by a forest officer.',
            cast: [
                { name: 'Rishab Shetty', photo: 'https://via.placeholder.com/100x100?text=Rishab' },
                { name: 'Sapthami Gowda', photo: 'https://via.placeholder.com/100x100?text=Sapthami' },
                { name: 'Kishore', photo: 'https://via.placeholder.com/100x100?text=Kishore' },
                { name: 'Achyuth Kumar', photo: 'https://via.placeholder.com/100x100?text=Achyuth' }
            ]
        },
        {
            id: 22,
            title: 'Vikram (Tamil)',
            poster: 'https://via.placeholder.com/300x450?text=Vikram+Tamil',
            rating: 8.6,
            year: 2022,
            duration: '2h 53m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'A special agent investigates a murder committed by a masked group of serial killers. However, a tangled maze of clues soon leads him to the drug kingpin.',
            cast: [
                { name: 'Kamal Haasan', photo: 'https://via.placeholder.com/100x100?text=Kamal' },
                { name: 'Vijay Sethupathi', photo: 'https://via.placeholder.com/100x100?text=Vijay' },
                { name: 'Fahadh Faasil', photo: 'https://via.placeholder.com/100x100?text=Fahadh' },
                { name: 'Narain', photo: 'https://via.placeholder.com/100x100?text=Narain' }
            ]
        },
        {
            id: 23,
            title: 'Baahubali (Telugu)',
            poster: 'https://via.placeholder.com/300x450?text=Baahubali+Telugu',
            rating: 8.7,
            year: 2015,
            duration: '2h 39m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'In ancient India, an adventurous and daring man becomes involved in a decades-old feud between two warring peoples.',
            cast: [
                { name: 'Prabhas', photo: 'https://via.placeholder.com/100x100?text=Prabhas' },
                { name: 'Rana Daggubati', photo: 'https://via.placeholder.com/100x100?text=Rana' },
                { name: 'Anushka Shetty', photo: 'https://via.placeholder.com/100x100?text=Anushka' },
                { name: 'Tamannaah', photo: 'https://via.placeholder.com/100x100?text=Tamannaah' }
            ]
        },
        {
            id: 24,
            title: 'Pushpa (Telugu)',
            poster: 'https://via.placeholder.com/300x450?text=Pushpa+Telugu',
            rating: 7.8,
            year: 2021,
            duration: '2h 59m',
            trailer: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
            video: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
            story: 'A laborer rises through the ranks of a smuggling syndicate, making enemies along the way as he becomes a powerful figure in the red sandalwood trade.',
            cast: [
                { name: 'Allu Arjun', photo: 'https://via.placeholder.com/100x100?text=Allu' },
                { name: 'Rashmika Mandanna', photo: 'https://via.placeholder.com/100x100?text=Rashmika' },
                { name: 'Fahadh Faasil', photo: 'https://via.placeholder.com/100x100?text=Fahadh' },
                { name: 'Sunil', photo: 'https://via.placeholder.com/100x100?text=Sunil' }
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
}

// Create movie card element
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.dataset.id = movie.id;

    card.innerHTML = `
        <div class="movie-poster">
            <img src="${movie.poster}" alt="${movie.title}">
        </div>
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <div class="movie-rating">
                <i class="fas fa-star"></i> ${movie.rating}
            </div>
        </div>
        <button class="watch-btn">Watch</button>
    `;

    return card;
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

    // Mute button in fullscreen player
    muteBtn.addEventListener('click', toggleMute);

    // Slider buttons
    prevBtns.forEach(btn => {
        btn.addEventListener('click', slideLeft);
    });

    nextBtns.forEach(btn => {
        btn.addEventListener('click', slideRight);
    });

    // Watch buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('watch-btn')) {
            const movieCard = e.target.closest('.movie-card');
            const movieId = parseInt(movieCard.dataset.id);
            openMovieModal(movieId);
        }
    });

    // Watch movie button in modal
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('watch-movie-btn')) {
            const modal = e.target.closest('.movie-modal');
            const movieId = parseInt(modal.querySelector('.modal-content').dataset.id);
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
        if (e.target === fullscreenPlayer) {
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
}

// Toggle theme between dark and light
function toggleTheme() {
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'light') {
        body.setAttribute('data-theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
    }
}

// Toggle mobile menu
function toggleMenu() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
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
    const modalContent = document.querySelector('.modal-content');
    modalContent.dataset.id = movie.id;

    document.querySelector('.movie-title').textContent = movie.title;
    document.querySelector('.rating-value').textContent = movie.rating;
    document.querySelector('.duration').innerHTML = `<i class="fas fa-clock"></i> ${movie.duration}`;
    document.querySelector('.year').innerHTML = `<i class="fas fa-calendar-alt"></i> ${movie.year}`;
    document.querySelector('.story-text').textContent = movie.story;

    // Set trailer video source
    const trailerVideo = document.querySelector('.trailer-video');
    trailerVideo.src = movie.trailer;
    trailerVideo.muted = true;
    trailerVideo.play();

    // Update cast
    const castContainer = document.querySelector('.cast-container');
    castContainer.innerHTML = '';

    movie.cast.forEach(actor => {
        const castMember = document.createElement('div');
        castMember.className = 'cast-member';
        castMember.innerHTML = `
            <img src="${actor.photo}" alt="${actor.name}" class="cast-photo">
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

    // Set video source
    movieVideo.src = movie.video;
    movieVideo.play();

    // Show fullscreen player
    fullscreenPlayer.classList.add('active');
    document.body.style.overflow = 'hidden';

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

// Toggle mute
function toggleMute() {
    movieVideo.muted = !movieVideo.muted;
    if (movieVideo.muted) {
        muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    } else {
        muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    }
}

// Slide movie slider left
function slideLeft(e) {
    const slider = e.target.closest('.movie-container').querySelector('.movie-slider');
    slider.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
}

// Slide movie slider right
function slideRight(e) {
    const slider = e.target.closest('.movie-container').querySelector('.movie-slider');
    slider.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
}

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
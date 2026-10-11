import express from 'express';

const router = express.Router();

const movies = [
  {
    id: 1,
    title: 'Midnight Echo',
    genre: 'Sci-Fi',
    year: 2024,
    rating: 8.9,
    runtime: '2h 12m',
    director: 'Ava Mercer',
    cast: ['Liam Cross', 'Nia Sol', 'Ethan Vale'],
    description: 'A lone signal from deep space awakens a hidden civilization and forces humanity to confront its darkest fears.',
    poster: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80',
    banner: 'https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?auto=format&fit=crop&w=1600&q=80',
    featured: true,
    type: 'movie'
  },
  {
    id: 2,
    title: 'The Crimson Tide',
    genre: 'Action',
    year: 2023,
    rating: 8.4,
    runtime: '1h 58m',
    director: 'Marcus Hall',
    cast: ['Jude Bloom', 'Rina Dorsey', 'Owen Hart'],
    description: 'An elite squad races through enemy territory to stop a global blackout before sunrise.',
    poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80',
    banner: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=1600&q=80',
    featured: false,
    type: 'movie'
  },
  {
    id: 3,
    title: 'Velvet Skyline',
    genre: 'Drama',
    year: 2022,
    rating: 8.1,
    runtime: '2h 05m',
    director: 'Sofia Reed',
    cast: ['Elena Frost', 'David Stone', 'Mila Rowan'],
    description: 'A gifted composer returns home to rebuild a city\'s forgotten music scene and heal old wounds.',
    poster: 'https://images.unsplash.com/photo-1524989941526-cf184f736a1d?auto=format&fit=crop&w=800&q=80',
    banner: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1600&q=80',
    featured: false,
    type: 'movie'
  },
  {
    id: 4,
    title: 'Neon Horizon',
    genre: 'Thriller',
    year: 2024,
    rating: 9.1,
    runtime: '2h 21m',
    director: 'Iris Wren',
    cast: ['Noah Reed', 'Ari Lane', 'Kora Flint'],
    description: 'In a city of endless light, one investigator follows a thread of disappearances to a truth no one wants to see.',
    poster: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
    banner: 'https://images.unsplash.com/photo-1521714161819-1558d1a6f1d5?auto=format&fit=crop&w=1600&q=80',
    featured: true,
    type: 'movie'
  },
  {
    id: 5,
    title: 'Golden Dusk',
    genre: 'Romance',
    year: 2021,
    rating: 7.8,
    runtime: '1h 47m',
    director: 'Nora Blake',
    cast: ['Lena Marsh', 'Theo Grant', 'Emma Pierce'],
    description: 'A bittersweet love story set against a fading coast and a promise that may never arrive.',
    poster: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80',
    banner: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80',
    featured: false,
    type: 'movie'
  },
  {
    id: 6,
    title: 'Shadow Protocol',
    genre: 'Mystery',
    year: 2023,
    rating: 8.7,
    runtime: '2h 08m',
    director: 'Daniel Kestrel',
    cast: ['Maya Ross', 'Clive Tate', 'Sophie Shaw'],
    description: 'When a private network starts predicting crimes before they happen, a cryptic hacker becomes the only witness.',
    poster: 'https://images.unsplash.com/photo-1515711660815-6f8df6f3ec75?auto=format&fit=crop&w=800&q=80',
    banner: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80',
    featured: false,
    type: 'movie'
  },
  {
    id: 7,
    title: 'Silent Ember',
    genre: 'Drama',
    year: 2025,
    rating: 8.3,
    runtime: '1h 54m',
    director: 'Leah Ford',
    cast: ['Miriam Stone', 'Liam Sloane', 'Owen Cross'],
    description: 'A grieving writer discovers a buried archive that reveals the missing truth behind a legendary fire.',
    poster: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
    banner: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
    featured: false,
    type: 'movie'
  },
  {
    id: 8,
    title: 'Glass Orbit',
    genre: 'Sci-Fi',
    year: 2025,
    rating: 8.6,
    runtime: '2h 17m',
    director: 'Rafi Morgan',
    cast: ['Ari Quinn', 'Theo Wells', 'Sera Knox'],
    description: 'A disgraced pilot is forced to lead a team through a collapsing orbital station.',
    poster: 'https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?auto=format&fit=crop&w=800&q=80',
    banner: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1600&q=80',
    featured: false,
    type: 'movie'
  },
  {
    id: 9,
    title: 'Black Harbor',
    genre: 'Crime',
    year: 2024,
    rating: 8.2,
    runtime: '2h 01m',
    director: 'Henry Vale',
    cast: ['Mila Reese', 'Frank Tate', 'Lio Morgan'],
    description: 'A detective follows a trail of buried evidence that leads to the city\'s most notorious syndicate.',
    poster: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80',
    banner: 'https://images.unsplash.com/photo-1524989941526-cf184f736a1d?auto=format&fit=crop&w=1600&q=80',
    featured: false,
    type: 'movie'
  },
  {
    id: 10,
    title: 'Night Signal',
    genre: 'Fantasy',
    year: 2025,
    rating: 8.8,
    runtime: '2h 06m',
    director: 'Lena Hart',
    cast: ['Ari Stone', 'Milo West', 'Sara Quinn'],
    description: 'A signal in the sky reveals a forgotten prophecy and starts a race across the world.',
    poster: 'https://images.unsplash.com/photo-1515711660815-6f8df6f3ec75?auto=format&fit=crop&w=800&q=80',
    banner: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1600&q=80',
    featured: false,
    type: 'movie'
  },
  {
    id: 11,
    title: 'Ashen River',
    genre: 'Adventure',
    year: 2023,
    rating: 8.5,
    runtime: '2h 14m',
    director: 'Mason Bird',
    cast: ['Hana Pike', 'Joel Cross', 'Nina Wells'],
    description: 'A river expedition uncovers a hidden city that changes the fate of an entire region.',
    poster: 'https://images.unsplash.com/photo-1521714161819-1558d1a6f1d5?auto=format&fit=crop&w=800&q=80',
    banner: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80',
    featured: false,
    type: 'movie'
  },
  {
    id: 12,
    title: 'Afterglow',
    genre: 'Romance',
    year: 2025,
    rating: 8.0,
    runtime: '1h 49m',
    director: 'Mia Quinn',
    cast: ['Ethan Holt', 'Nora Flint', 'Leo Hart'],
    description: 'Two strangers share a midnight train ride that transforms into a life-altering promise.',
    poster: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
    banner: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1600&q=80',
    featured: false,
    type: 'movie'
  }
];

// Get all movies
router.get('/', (req, res) => {
  res.json(movies);
});

// Get single movie
router.get('/:id', (req, res) => {
  const movie = movies.find(m => m.id === Number(req.params.id));
  if (!movie) {
    return res.status(404).json({ message: 'Movie not found' });
  }
  res.json(movie);
});

// Search movies
router.get('/search', (req, res) => {
  const { q } = req.query;
  if (!q) {
    return res.status(400).json({ message: 'Search query required' });
  }

  const results = movies.filter(m =>
    m.title.toLowerCase().includes(q.toLowerCase()) ||
    m.description.toLowerCase().includes(q.toLowerCase())
  );

  res.json(results);
});

// Get movies by genre
router.get('/genre/:genre', (req, res) => {
  const { genre } = req.params;
  const results = movies.filter(m => m.genre.toLowerCase() === genre.toLowerCase());
  res.json(results);
});

// Get all genres
router.get('/categories', (req, res) => {
  const genres = [...new Set(movies.map(m => m.genre))];
  res.json(genres);
});

export default router;

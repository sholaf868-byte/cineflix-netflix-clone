import express from 'express';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();
const watchlists = {}; // In-memory storage: userId -> [movieIds]

// Get watchlist
router.get('/', authMiddleware, (req, res) => {
  const userId = req.user.id;
  const watchlist = watchlists[userId] || [];
  res.json({ watchlist });
});

// Add to watchlist
router.post('/add', authMiddleware, (req, res) => {
  try {
    const userId = req.user.id;
    const { movieId } = req.body;

    if (!movieId) {
      return res.status(400).json({ message: 'Movie ID required' });
    }

    if (!watchlists[userId]) {
      watchlists[userId] = [];
    }

    if (!watchlists[userId].includes(movieId)) {
      watchlists[userId].push(movieId);
    }

    res.json({ message: 'Added to watchlist', watchlist: watchlists[userId] });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Remove from watchlist
router.delete('/:movieId', authMiddleware, (req, res) => {
  try {
    const userId = req.user.id;
    const movieId = Number(req.params.movieId);

    if (!watchlists[userId]) {
      return res.status(404).json({ message: 'Watchlist not found' });
    }

    watchlists[userId] = watchlists[userId].filter(id => id !== movieId);

    res.json({ message: 'Removed from watchlist', watchlist: watchlists[userId] });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;

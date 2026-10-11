import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import moviesRoutes from './routes/movies.js';
import watchlistRoutes from './routes/watchlist.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/movies', moviesRoutes);
app.use('/api/watchlist', watchlistRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'CineFlix API is running' });
});

app.listen(PORT, () => {
  console.log(`🎬 CineFlix Backend running on http://localhost:${PORT}`);
});

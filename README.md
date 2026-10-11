# CineFlix - Netflix-Style Clone

A full-stack movie streaming application with React frontend, Node.js backend, and modern features.

## Features

✅ React + Vite Frontend  
✅ Express.js Backend API  
✅ Movie Database (MongoDB/JSON)  
✅ User Authentication (JWT)  
✅ Login/Signup Pages  
✅ Netflix-style Responsive Layout  
✅ Movie Detail Modal  
✅ Movie Search & Filter  
✅ Watchlist & Favorites  
✅ Dark Theme UI  

## Project Structure

```
cineflix-netflix-clone/
├── backend/           # Node.js + Express server
│   ├── models/        # Database models
│   ├── routes/        # API routes
│   ├── controllers/   # Route handlers
│   ├── middleware/    # Auth & validation
│   ├── server.js      # Entry point
│   └── package.json
│
└── frontend/          # React + Vite app
    ├── src/
    │   ├── pages/     # Page components
    │   ├── components/# Reusable components
    │   ├── hooks/     # Custom hooks
    │   ├── context/   # React Context
    │   ├── api/       # API calls
    │   ├── App.jsx
    │   └── main.jsx
    ├── vite.config.js
    ├── index.html
    └── package.json
```

## Setup Instructions

### Backend Setup

```bash
cd backend
npm install

# Create .env file
echo "PORT=5000" > .env
echo "JWT_SECRET=your_secret_key_here" >> .env

# Start server
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install

# Start dev server
npm run dev
```

Frontend will run on: http://localhost:5173  
Backend will run on: http://localhost:5000

## API Endpoints

### Auth
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile (protected)

### Movies
- `GET /api/movies` - Get all movies
- `GET /api/movies/:id` - Get single movie
- `GET /api/movies/search?q=query` - Search movies
- `GET /api/movies/genre/:genre` - Get movies by genre

### Watchlist
- `GET /api/watchlist` - Get user's watchlist (protected)
- `POST /api/watchlist/add` - Add to watchlist (protected)
- `DELETE /api/watchlist/:id` - Remove from watchlist (protected)

## Technologies

### Frontend
- React 18
- Vite
- Tailwind CSS
- Axios
- React Router

### Backend
- Node.js
- Express
- JWT Authentication
- CORS

## License

MIT

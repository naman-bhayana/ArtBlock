const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the frontend
app.use(express.static(path.join(__dirname, '/')));

// Sample API route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'ArtBlock API is running' });
});

// NFT routes placeholder
app.get('/api/nfts', (req, res) => {
  // This would normally fetch from MongoDB
  // For now, we'll just send the mock data
  res.sendFile(path.join(__dirname, 'js/nft-data.js'));
});

// Artist routes placeholder
app.get('/api/artists', (req, res) => {
  // This would normally fetch from MongoDB
  // For now, we'll just send the mock data
  res.sendFile(path.join(__dirname, 'js/artist-data.js'));
});

// Catch-all route to serve the frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to view the application`);
});

/**
 * Note: This is a simple Express server for demonstration purposes.
 * In a full MERN implementation, you would:
 * 1. Connect to MongoDB using Mongoose
 * 2. Implement proper router files for different resources
 * 3. Add authentication middleware
 * 4. Implement error handling
 * 5. Add controller functions for each route
 * 6. Implement WebSocket for real-time updates
 * 
 * See MERN_IMPLEMENTATION.md for more details on the planned architecture.
 */ 
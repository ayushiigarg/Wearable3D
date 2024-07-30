import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import dalleRoutes from './routes/dalle.routes.js';

dotenv.config();

const app = express(); // Create an express app
app.use(cors()); // For cross-origin requests
app.use(express.json({ limit: '50mb' })); // For parsing application/json

app.use('/api/v1/dalle', dalleRoutes); // Mount the DALL-E routes

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from DALL-E!' });
}); // Test endpoint

app.listen(5000, () => console.log('Server has started on port 5000')); // Start the server

import express from 'express';
import dotenv from 'dotenv';
import { initDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';
import transactionsRoute from './routes/transactionsRoute.js';
import { neon } from '@neondatabase/serverless';


dotenv.config();

export const app = express();

// Middleware
app.use(rateLimiter);
app.use(express.json());

const PORT = process.env.PORT || 5001;

// Initialize DB


// Routes




app.use("/api/transactions", transactionsRoute);



// Start server



initDB().then(() => {
  app.listen(PORT, () => {
    console.log('Server is running on port:', PORT);
  });
});

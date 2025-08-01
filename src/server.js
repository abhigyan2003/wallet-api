import express from 'express';
import dotenv from 'dotenv';
import { initDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';
import transactionsRoute from './routes/transactionsRoute.js';
import { neon } from '@neondatabase/serverless';
import job from './config/cron.js';

dotenv.config();

export const app = express();

if(process.env.NODE_ENV === "production") job.start();

// Middleware
app.use(rateLimiter);
app.use(express.json());

const PORT = process.env.PORT || 5001;


app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});
// Initialize DB


// Routes




app.use("/api/transactions", transactionsRoute);



// Start server



initDB().then(() => {
  app.listen(PORT, () => {
    console.log('Server is running on port:', PORT);
  });
});

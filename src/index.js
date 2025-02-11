import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Job } from './models/job.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/job-portal')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use(express.json());

// GET /api/jobs/:id - Get job by ID
app.get('/api/jobs/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const job = await Job.findById(id);

    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }

    res.json(job);
  } catch (error) {
    console.error('Error fetching job:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});

import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  salary_range: {
    type: String
  }
}, {
  timestamps: true
});

export const Job = mongoose.model('Job', jobSchema);
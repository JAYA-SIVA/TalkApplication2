import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use('/api/users', userRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB Connected');
    app.listen(5000, () => console.log('Server running on http://localhost:5000'));
  })
  .catch(err => console.error(err));

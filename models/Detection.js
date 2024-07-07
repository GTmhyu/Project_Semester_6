import mongoose from 'mongoose';

const DetectionSchema = new mongoose.Schema({
  name: String,
  timestamp: Date,
});

export default mongoose.model('Detection', DetectionSchema);
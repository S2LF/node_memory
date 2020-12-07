import mongoose from 'mongoose';

const { Schema } = mongoose;
const MemorySchema = new Schema({
  name: { type: String, required: true },
  guesses: { type: Number, required: true },
  date: { type: String, required: true },
});

export default mongoose.model('memory', MemorySchema);

import mongoose from '../database';

export interface GameLootDocument extends mongoose.Document {
  title: string;
  company: string;
  offerEndTime: string;
  image: string;
  isClaimed?: boolean;
  createdAt?: Date;
}

const GameLootSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  company: {
    type: String,
    required: true,
  },
  offerEndTime: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  isClaimed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const GameLoot = mongoose.model<GameLootDocument>('GameLoot', GameLootSchema);

export default GameLoot;

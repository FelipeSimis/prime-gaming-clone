import mongoose from '../database';

export interface InGameLootDocument extends mongoose.Document {
  title: string;
  company: string;
  offerEndTime: string;
  hasCode: boolean;
  code?: string;
  image: string;
  isClaimed?: boolean;
  createdAt?: Date;
}

const InGameLootSchema = new mongoose.Schema({
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
  hasCode: {
    type: Boolean,
    required: true,
  },
  code: {
    type: String,
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

const InGameLoot = mongoose.model<InGameLootDocument>(
  'InGameLoot',
  InGameLootSchema
);

export default InGameLoot;

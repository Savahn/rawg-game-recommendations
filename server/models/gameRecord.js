import mongoose from 'mongoose';

const gameSchema = mongoose.Schema({
  id: Number,
  name: String,
  rawgName: String,
  platforms: [
    {
      name: String,
      id: Number,
    },
  ],
  metacritic_score: Number,
  user_rating: Number,
  release_date: Date,
  image: String,
  website: String,
  reddit_url: String,
  publisher: {
    id: Number,
    name: String,
    rawgName: String,
    image: String,
  },
  addedOn: {
    type: Date,
    default: new Date(),
  },
});

const GameRecord = mongoose.model('GameRecord', gameSchema);

export default GameRecord;

import GameRecord from '../models/gameRecord.js';

export const getGames = async (req, res) => {
  try {
    const games = await GameRecord.find();
    res.status(200).json({ count: games.length, results: games });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addGame = async (req, res) => {
  const game = req.body;

  const newGame = new GameRecord(game);

  try {
    await newGame.save();

    res.status(201).json(newGame);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

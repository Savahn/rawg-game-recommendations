import express from 'express';

import { getGames, addGame } from '../controllers/games.js'

const router = express.Router();

// Get all owned games
router.get('/', getGames);
router.post('/', addGame);

export default router;
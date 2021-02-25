import { combineReducers } from 'redux';
import games from './games';
import selectedGame from './selectedGame';
import currentScreen from './currentScreen';
import db from './rawgGames';

export default combineReducers({
  games,
  selectedGame,
  currentScreen,
  db,
});

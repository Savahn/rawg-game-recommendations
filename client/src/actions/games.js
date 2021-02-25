import * as api from '../api';

// Action Creators using redux-thunk dispatching
export const getGames = () => async dispatch => {
  try {
    const { data } = await api.fetchGames();
    dispatch({ type: 'FETCH_ALL', payload: data.results });
  } catch (error) {
    console.log(error);
  }
};

export const addGame = game => async dispatch => {
  try {
    const { data } = await api.addGameToLibrary(game);
    dispatch({ type: 'CREATE', payload: data.results });
  } catch (error) {
    console.log(error);
  }
};

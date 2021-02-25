import * as api from '../api';

// Action Creators using redux-thunk dispatching
export const getRawgGames = props => async dispatch => {
  try {
    const { data } = await api.fetchRawgGames(props);
    dispatch({ type: 'FETCH_ALL', payload: data.results });
  } catch (error) {
    console.log(error);
  }
};

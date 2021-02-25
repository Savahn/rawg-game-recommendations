// Action Creators using redux-thunk dispatching
export const selectGame = game => async dispatch => {
  try {
    dispatch({ type: 'SELECT', payload: game });
  } catch (error) {
    console.log(error);
  }
};

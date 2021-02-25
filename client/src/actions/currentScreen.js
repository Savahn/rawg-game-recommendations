// Action Creators using redux-thunk dispatching
export const navigateToScreen = screen => async dispatch => {
  try {
    dispatch({ type: 'NAVIGATE', payload: screen });
  } catch (error) {
    console.log(error);
  }
};

export default (selectedGame = {}, action) => {
  switch (action.type) {
    case 'SELECT':
      return action.payload;
    default:
      return selectedGame;
  }
};

export default (rawg = { games: [] }, action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      rawg.games = action.payload;
      return rawg;
    default:
      return rawg;
  }
};

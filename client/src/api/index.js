import axios from 'axios';

const {
  REACT_APP_GAMES_API_URL: apiUrl,
  REACT_APP_RAWG_API_URL: rawgUrl,
} = process.env;

// GETs
export const fetchGames = () => axios.get(apiUrl);

export const fetchRawgGames = props => {
  if (typeof props === 'string') {
    // Should only occur when the next url is passed in for pagination
    return axios.get(props);
  }
  let url = `${rawgUrl}/${props.uri}`;
  if (props.platforms) {
    url = `${url}?platforms=${props.platforms.join(',')}`;
  }
  return axios.get(url);
};

// POSTs

export const addGameToLibrary = async gameInfo => {
  const { data: game } = await fetchRawgGames(
    `${rawgUrl}/games/${gameInfo.id}`
  );
  // TODO: Should really check whether the game already exists and modify if it does
  const newGame = {
    id: game.id,
    name: game.name,
    rawgName: game.slug,
    platforms: gameInfo.platforms,
    metacritic_score: game.metacritic,
    user_rating: game.rating,
    release_date: game.released,
    image: game.background_image,
    website: game.website,
    reddit_url: game.reddit_url,
    publisher: game.publishers[0],
  };
  await axios.post(apiUrl, newGame);
  return axios.get(apiUrl);
};

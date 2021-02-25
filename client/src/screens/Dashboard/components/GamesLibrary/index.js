import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Moment from 'moment';
import Table from '../../../../components/Table/index.js';

import { selectGame } from '../../../../actions/selectedGame';

const columns = [
  { alignment: 'center', name: '_image', type: 'image' },
  { alignment: 'inherit', name: 'Title' },
  { alignment: 'inherit', name: 'Publisher' },
  { alignment: 'right', name: 'Metacritic Score' },
  { alignment: 'right', name: 'User Rating' },
  {
    alignment: 'inherit',
    name: 'Release Date',
    format: date => Moment(date).format('MMMM Do YYYY'),
  },
];

const GamesLibrary = () => {
  const dispatch = useDispatch();
  const games = useSelector(state => state.games);
  const selectedGame = useSelector(state => state.selectedGame);

  const rows = games.map(x => {
    return {
      _owned: true,
      _image: x.image,
      title: x.name,
      publisher: x.publisher.name,
      metacriticScore: x.metacritic_score,
      userRating: x.user_rating,
      releaseDate: x.release_date,
      onClick: () => dispatch(selectGame(x)),
    };
  });

  return <Table title='Games Library' columns={columns} rows={rows} />;
};

export default GamesLibrary;

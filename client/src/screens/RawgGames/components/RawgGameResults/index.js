import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Moment from 'moment';

import Table from '../../../../components/Table/index.js';

import * as api from '../../../../api';

import { addGame } from '../../../../actions/games';
import * as Constants from '../../../../constants';

const columns = [
  { alignment: 'center', name: '_image', type: 'image' },
  { alignment: 'inherit', name: 'Title' },
  { alignment: 'inherit', name: 'Platform' },
  {
    alignment: 'inherit',
    name: 'Release Date',
    format: date => Moment(date).format('MMMM Do YYYY'),
  },
  { alignment: 'center', name: '_addToLibrary', type: 'button' },
];

const RawgGames = () => {
  const dispatch = useDispatch();

  const [selectedPlatform, setSelectedPlatform] = useState(Constants.PC);
  const [games, setGames] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [next, setNext] = useState();
  const loadGames = async (
    props = { uri: 'games', platforms: [selectedPlatform.id] }
  ) => {
    const { data } = await api.fetchRawgGames(props);
    setGames(data.results);
    setNext(data.next);
  };

  useEffect(() => {
    loadGames();
    return () => {};
  }, []);

  const rows = games.map(x => {
    return {
      _image: x.background_image,
      title: x.name,
      platform: selectedPlatform.name,
      releaseDate: x.release_date,
      _addToLibrary: {
        text: 'Add to Library',
        onClick: () =>
          dispatch(addGame({ ...x, platforms: [selectedPlatform] })),
      },
    };
  });

  return (
    <Table
      title='RAWG Games'
      columns={columns}
      rows={rows}
      rowsPerPage={pageSize}
      setRowsPerPage={setPageSize}
      next={next}
      loadMore={loadGames}
    />
  );
};

export default RawgGames;

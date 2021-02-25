import React, { useEffect } from 'react';
import { Container, CssBaseline, Grid, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import RawgGames from './components/RawgGameResults';
import { navigateToScreen } from '../../actions/currentScreen';

import { styles } from './styles';

const GameDatabase = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(navigateToScreen({ name: 'Games Database' }));
  }, [dispatch]);

  const classes = styles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth='md' className={classes.container}>
        <Grid container spacing={1}>
          <Grid item sm>
            <Paper className={classes.paper}>
              <RawgGames />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default GameDatabase;

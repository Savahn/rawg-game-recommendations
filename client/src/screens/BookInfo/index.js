import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, CssBaseline, Grid, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import BookCard from './components/BookCard';
import { navigateToScreen } from '../../actions/currentScreen';

import { styles } from './styles';

export default () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(navigateToScreen({ name: 'Course Info' }));
  }, [dispatch]);

  const classes = styles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth='md' className={classes.container}>
        <Grid container spacing={1}>
          <Grid item sm>
            <Paper className={classes.paper}>
              <BookCard book={pathname.replace('/', '')} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

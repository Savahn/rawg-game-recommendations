import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, CssBaseline, Grid, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import BookCard from './components/BookCard';
import { navigateToScreen } from '../../actions/currentScreen';

import { styles } from './styles';

export default () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const currentScreen = useSelector(state => state.currentScreen);

  /** The dispatch hook is asynchronous by design
   *   however, the resultant state may not be updated
   *   upon the return of the dispatch function. This is hard to
   *   visualize or demonstrate, but it has to do with the React lifecycle.
   *   Redux holds onto state, when we dispatch an action the local Redux state and values
   *   are updated, however, values that we retrieve from the useSelector from redux which
   *   hook into the React hooks lifecycle methods for handling state are updated based on
   *   the React Lifecycle and intrinsically linked to the JVM and the virtual dom which may
   *   or may not be synchronized to any individual component's state
   *   To action upon a state value from dispatch, create a useEffect function that listens to
   *   that state value and will process something upon the modification of that value
   */
  useEffect(() => {
    console.log(`currentScreen: ${JSON.stringify(currentScreen)}`);
  }, [currentScreen]);

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

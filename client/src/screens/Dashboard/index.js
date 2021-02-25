import React, { useEffect } from 'react';
import { Container, CssBaseline, Grid, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Games from './components/GamesLibrary';
import { navigateToScreen } from '../../actions/currentScreen';

import { styles } from './styles';

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(navigateToScreen({ name: 'Games Dashboard' }));
  }, [dispatch]);

  const classes = styles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth='md' className={classes.container}>
        <Grid container spacing={1}>
          <Grid item sm>
            <Paper className={classes.paper}>
              <Games />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;

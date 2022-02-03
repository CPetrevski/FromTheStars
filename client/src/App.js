
import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import sat from './images/sat.png';
import Map from './components/Map/Map'
import useStyles from './styles';


const App = () => {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v3/events/')
      const { events } = await res.json()

      setEventData(events)
      setLoading(false)
    }

    fetchEvents()
  }, [])

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="primary">
        <Typography className={classes.heading} variant="h2" align="center">From The Stars</Typography>
        <img className={classes.image} src={sat} alt="Stars" height="60" />
      </AppBar>

      <div>
        { !loading ? <Map eventData={eventData} /> : <h1></h1>}
      </div>

      <Grow in>
        <Container>
          <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;

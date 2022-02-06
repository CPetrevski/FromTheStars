import React from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';


import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import Map from '../Map/Map';

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    const [eventData, setEventData] = useState([]);
    const [loading, setLoading] = useState(false);
  
  
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
        

        <Grow in>
            <Container>
            <div>
            { !loading ? <Map eventData={eventData} /> : <h1>.</h1>}
            </div>
            <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
                    <Posts setCurrentId={setCurrentId} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
            </Grid>
            </Container>
        </Grow>
    )
};

export default Home;

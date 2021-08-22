import { Grid } from '@material-ui/core';
import React from 'react';

import Weather from '../weatherApp/Weather';
import WeatherAppOther from '../weatherApp/WeatherAppOther';
import WeatherAppLight from './../weatherApp/WeatherAppLight';

const Home = () => {
    return (
        <Grid container>
            {/* <Grid item sm={4}>
                <Chats/>
            </Grid> */}
            {/* <Grid item sm={4}>
               <Email/>
            </Grid> */}

            <Grid item sm={4} style={{padding:'2rem'}}>
                <Weather  />
            </Grid>
            <Grid item sm={4} style={{padding:'2rem'}}>
                <WeatherAppLight  />
            </Grid>
            <Grid item sm={4} style={{padding:'2rem'}}>
                <WeatherAppOther  />
            </Grid>
        </Grid>
    );
};

export default Home;
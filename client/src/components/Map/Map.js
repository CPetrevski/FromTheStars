import React from 'react';
import GoogleMapReact from 'google-map-react';
import useStyles from './styles';
import LocationMarker from '../LocationMarker/locationMarker'
import LocationMarkerStorm from '../LocationMarker/locationMarkerStorm';

const Map = ({ eventData, center, zoom}) => {
    const classes = useStyles();
    const markers = eventData.map(ev => {
        // if (ev.categories[0].id === "wildfires") {
        //     return <LocationMarker lat={ev.geometry[4].coordinates[1]} lng={ev.geometry[0].coordinates[0]} />
        // }
        // if (ev.categories[0].id === "severeStorms") {
        //     return <LocationMarkerStorm lat={ev.geometry[4].coordinates[1]} lng={ev.geometry[0].coordinates[0]} />
        // }
        // return null
    })

    return (
        <div className={classes.map}>
            <GoogleMapReact bootstrapURLKeys={{ key: 'AIzaSyAutk1vWCQAeu48C1eBMSHpchhzZzLeR-Q' }} defaultCenter={ center } defaultZoom={ zoom }>
                {markers}
            </GoogleMapReact>
        </div>
    )
};

Map.defaultProps = {
    center: {
        lat: -33.84108345650081,
        lng: 151.202485479958
    },
    zoom: 6
}

export default Map;
// Sydney Co-ordinates
// -33.84108345650081, 151.202485479958
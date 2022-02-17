import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './MapStyles';

import { ClassNameMap } from '@material-ui/core/styles/withStyles';

const Map = () => {
  const classes: ClassNameMap = useStyles();
  const isMobile: boolean = useMediaQuery('(min-width: 600px)');

  const coordinates: { lat: number; lng: number } = {
    lat: -34.6035265,
    lng: -58.3815909,
  };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true }}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;

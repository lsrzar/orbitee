import React from 'react';
// import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolbar}>
        <Box display='flex'>
          <img
            src={process.env.PUBLIC_URL + '/assets/logo-black.svg'}
            alt='brand icon'
            style={{
              height: '2rem',
              filter:
                'invert(100%) sepia(1%) saturate(70%) hue-rotate(202deg) brightness(116%) contrast(100%)',
              padding: '0px 5px 0px 10px',
            }}
          />
          <Typography variant='h5' className={classes.title}>
            orbitee
          </Typography>
        </Box>
        <Box display='flex'>
          <Typography variant='h6' className={classes.subtitle}>
            Explora tus alrededores
          </Typography>
          {/* <Autocomplete> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Search...'
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

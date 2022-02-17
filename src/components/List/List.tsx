import React, { useState } from 'react';
import {
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core';

import useStyles from './ListStyles';
import Places from '../Places/Places';

const List = () => {
  const classes = useStyles();
  const [type, setType] = useState<string>('restaurantes');
  const [rating, setRating] = useState<string>('');

  const places: { name: string }[] = [
    { name: 'One' },
    { name: 'Two' },
    { name: 'Three' },
    { name: 'One' },
    { name: 'Two' },
    { name: 'Three' },
    { name: 'One' },
    { name: 'Two' },
    { name: 'Three' },
  ];

  return (
    <div className={classes.container}>
      <Typography variant='h4' className={classes.title}>
        Restaurantes, Hoteles y Atracciones alrededor tuyo
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Categoría</InputLabel>
        <Select
          value={type}
          onChange={(e: React.ChangeEvent<{ name?: string; value: unknown }>) =>
            setType(typeof e.target.value === 'string' ? e.target.value : '')
          }
        >
          <MenuItem value='restaurantes'>Restaurantes</MenuItem>
          <MenuItem value='hoteles'>Hoteles</MenuItem>
          <MenuItem value='atracciones'>Atracciones</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select
          value={rating}
          onChange={(e: React.ChangeEvent<{ name?: string; value: unknown }>) =>
            setRating(typeof e.target.value === 'string' ? e.target.value : '')
          }
        >
          <MenuItem value={0}>Todos</MenuItem>
          <MenuItem value={3}>3.0+</MenuItem>
          <MenuItem value={4}>4.0+</MenuItem>
          <MenuItem value={4.5}>4.5+</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <Places place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;

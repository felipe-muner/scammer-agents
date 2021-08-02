import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React from 'react';
import Avatar from '@material-ui/core/Avatar';


const top100Films = [
  { id: 1, title: 'Company A', year: 1972 },
  { id: 2, title: 'Company B', year: 1972 },
  { id: 3, title: 'Company C', year: 1974 },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    green: {
      color: theme.palette.getContrastText(green[500]),
      backgroundColor: green[500],
    },
    red: {
      color: theme.palette.getContrastText(red[500]),
      backgroundColor: red[500],
    },
  }),
);

export default function ComboBox({ setSelected }: { setSelected: any }) {
  const classes = useStyles();

  return <Autocomplete
    getOptionSelected={(option, value) => option.title === value.title}
    onChange={(e, v) => setSelected(v)}
    id="combo-box-demo"
    options={top100Films}
    getOptionLabel={(option) => option.title}
    style={{ width: 500 }}
    renderInput={(params) => <TextField {...params} label="Find the company" variant="outlined" />}
    renderOption={(option) => (
      <React.Fragment>
        <Avatar className={classes.green}>
          10
        </Avatar>
        <Avatar className={classes.red}>
          5
        </Avatar>
        {option.title}
      </React.Fragment>
    )}
  />
}
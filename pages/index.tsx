import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';

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

export default function Home() {

  const classes = useStyles();

  const top100Films = [
    { id: 1, title: 'Company A', year: 1972 },
    { id: 2, title: 'Company B', year: 1972 },
    { id: 3, title: 'Company C', year: 1974 },
  ];

  const [selected, setSelected] = React.useState<{ id: number, title: string, year: number } | null>(null);

  const showCompany = () => {
    switch (selected && selected.id) {
      case 1:
        return 'bar1';
      case 2:
        return 'bar2';
      case 3:
        return 'bar3';
      default:
        return 'foo';
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Autocomplete
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

        {showCompany()}

      </main>

    </div>
  )
}

import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import styles from "./Cards.module.css";

const Cards =  ( {globalData :{ cases, recovered, deaths } }) => {
  // we only passed one prop, which is data.
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

 if(!cases){
  return "Loading.."
 }
  

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justifyContent="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Total Infected Cases
            </Typography>
            <Typography varaint="h5">
              <CountUp start={0} end={cases} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary">{date}</Typography>
            <Typography varaint="body2">
              Number of active cases of COVID-19 from 2020 to present
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
            Total Recovered Cases
            </Typography>
            <Typography varaint="h5">
              <CountUp start={0} end={recovered} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary">{date}</Typography>
            <Typography varaint="body2">
              Number of recoveries cases of COVID-19 from 2020 to present
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.death)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Total Deaths
            </Typography>
            <Typography varaint="h5">
              <CountUp start={0} end={deaths} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary">{date}</Typography>
            <Typography varaint="body2">
              Number of deaths caused by COVID-19 from 2020 to present
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;

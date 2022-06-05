import React from "react";
import { Grid } from "@material-ui/core";
import CardComponent from "./Card/Card";
import styles from "./Cards.module.css";

// we only passed one prop, which is globalData.
const Cards = ({ globalData: { cases, recovered, deaths } }) => {
  const current = new Date();
  const date = `${current.getMonth() + 1}/${current.getDate}/${current.getFullYear()}`;

  if (!cases) {
    return "Loading..";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justifyContent="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Worldwide Infected Cases"
          dataValue={cases}
          lastUpdate={date}
          cardSubtitle="Number of infected cases from COVID-19."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Worldwide Recovered Cases"
          dataValue={recovered}
          lastUpdate={date}
          cardSubtitle="Number of recovered cases from COVID-19."
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Worldwide Death Cases"
          dataValue={deaths}
          lastUpdate={date}
          cardSubtitle="Number of death cases caused by COVID-19."
        />
      </Grid>
    </div>
  );
};

export default Cards;

import React from "react";
import { Grid } from "@material-ui/core";
import CardComponent from "./Card/Card";
import styles from "./Cards.module.css";

// we only passed one prop, which is globalData.
const Cards = ({ globalData: { cases, recovered, deaths, active, todayCases, todayDeaths } }) => {

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
          cardSubtitle="Number of infected cases from COVID-19."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Worldwide Recovered Cases"
          dataValue={recovered}
          cardSubtitle="Number of recovered cases from COVID-19."
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Worldwide Death Cases"
          dataValue={deaths}
          cardSubtitle="Number of death cases caused by COVID-19."
        />
        <CardComponent
          className={styles.active}
          cardTitle="Worldwide Current Active Cases"
          dataValue={active}
          cardSubtitle="Number of active cases of COVID-19."
        />
         <CardComponent
          className={styles.todayActive}
          cardTitle="Today's Infected Cases (Worldwide)"
          dataValue={todayCases}
          cardSubtitle="Today's number of infected cases from COVID-19."
        />
         <CardComponent
          className={styles.todayDeaths}
          cardTitle="Today's Death Cases (Worldwide)"
          dataValue={todayDeaths}
          cardSubtitle="Today's number of death cases caused by COVID-19."
        />
      </Grid>
    </div>
  );
};

export default Cards;

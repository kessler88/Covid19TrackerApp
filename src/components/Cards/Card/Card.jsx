import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import styles from "./Card.module.css";

const cdate = new Date().toLocaleDateString();

const CardComponent = ({
  className,
  cardTitle,
  dataValue,
  cardSubtitle
}) => (
  <Grid
    item
    component={Card}
    xs={12}
    md={3}
    className={cx(styles.card, className)}
  >
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        {cardTitle}
      </Typography>
      <Typography variant="h5">
        <CountUp start={0} end={dataValue} duration={2.5} separator="," />
      </Typography>
      <Typography color="textSecondary">{cdate}</Typography>
      <Typography varaint="body2">{cardSubtitle}</Typography>
    </CardContent>
  </Grid>
);

export default CardComponent;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
          <Paper elevation={0} />
          <p>The best time for:
          Cursing Tuesday/Saturaday, Waning/Dark Moon
          Protection - Tuesday/Thursday/Saturday, Waxing/Full Moon
          Cleansing - Saturday, Waning Moon/Blue Moon
          Banishing - Saturday, Waning Moon/Dark Moon
          Binding - Tuesday/Saturday, Waning Moon/Full Moon
          Healing - Thursday/Sunday, Full Moon/Blue Moon
          Enhanced psychic power - Monday, Full Moon/Blue Moon
          Love/Friends hip - Friday, New Moon/Waxing Moon
          Success - Sunday, Waxing Moon/Blue Moon
          Luck- Wednesday, Waxing Moon/Blue Moon
          Wealth - Wednesday/Thursday/Sunday, Waxing Moon
          Peace- Monday, Waning/New Moon
          Courage/Strength Tuesday, Waxing/Full Moon
Intelligence/Wisdom - Monday/VWednesday, Waxing/Full Moon</p>
      <Paper />
    </div>
  );
}

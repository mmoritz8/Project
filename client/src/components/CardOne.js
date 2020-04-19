import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CardOne() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
The best time for:
        </Typography>

        <Typography variant="h5" component="h2">
          Waning Moon/New Moon:        </Typography>
        <Typography variant="body2" component="p">
          Peace: Monday         <br />
        </Typography>
        <Typography variant="h5" component="h2">
          Waning Moon/Dark Moon:        </Typography>
        <Typography variant="body2" component="p">
          Cursing: Tuesday/Saturday          <br />
        </Typography>
        <Typography variant="body2" component="p">
          Banishing: Saturday          <br />
        </Typography>
        <Typography variant="h5" component="h2">
          Waning Moon/Full Moon:        </Typography>
        <Typography variant="body2" component="p">
          Binding: Tuesday/Saturday          <br />
        </Typography>
      </CardContent>

    </Card>
  );
}

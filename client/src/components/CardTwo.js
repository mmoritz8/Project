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

export default function CardTwo() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
The best time:
        </Typography>
        <Typography variant="h5" component="h2">
Full Moon/Blue Moon:        </Typography>
        <Typography variant="body2" component="p">
Enhanced psychic power: Monday          <br />
        </Typography>
        <Typography variant="body2" component="p">
                  Healing: Thursday/Sunday          <br />
        </Typography>
        <Typography variant="h5" component="h2">
          Waning Moon/Blue Moon:        </Typography>
        <Typography variant="body2" component="p">
          Cleansing: Saturday          <br />
        </Typography>
        <Typography variant="h5" component="h2">
          Waxing Moon/Blue Moon:
                    </Typography>
        <Typography variant="body2" component="p">
          Success: Sunday          <br />
        </Typography>
        <Typography variant="body2" component="p">
          Luck: Wednesday          <br />
        </Typography>
      </CardContent>

    </Card>
  );
}

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

export default function CardThree() {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    The best time:
        </Typography>

                <Typography variant="h5" component="h2">
                    Waxing Moon:        </Typography>
                <Typography variant="body2" component="p">
                    Wealth: Wednesday/Thursday/Sunday          <br />
                </Typography>
                <Typography variant="h5" component="h2">
                    Waxing Moon/Full Moon:        </Typography>
                <Typography variant="body2" component="p">
                    Courage/Strength: Tuesday        <br />
                </Typography>
                <Typography variant="body2" component="p">
                    Intelligence/Wisdom: Monday/Wednesday          <br />
                </Typography>
                <Typography variant="body2" component="p">
                    Protection: Tuesday/Thursday/Saturday          <br />
                </Typography>

            </CardContent>

        </Card>
    );
}

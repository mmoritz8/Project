import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
Full Moon Names</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>Blue Moon (Variable): This occurs when the full moon appears twice within the same calendar month. A blue moon is considered to be extremely lucky and is used for magical rites that are in alignment with luck, prosperity, and good fortune.</Paper>
                </Grid>

                <Grid item xs={3}>
                    <Paper className={classes.paper}>November (Snow Moon): Scorpio brings in the dark season and Winter begins. This is the death of the season, a time to dispose of the dead wood of the year and analyze what is healthy and unhealthy within our lives.
</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>December (Oak Moon): The mighty oak withstands the cold hardship of winter. The oak is revered for its longevity and the fact that such a mighty creature comes from the smallest acorn. Now is the time to remain steadfast in convictions and principles as plans are made for the coming year.
</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>January (Wolf Moon): The wolf is a fearsome creature of the night and a companion to the Witch and Shaman. The wolf protects and guards his home and family. This is a time to protect what we have as we consider new options.
</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>February (Storm Moon): A storm is said to rage most fiercely just before it ends, and the year usually follows suit. The end of winter, death, and darkness is coming. It is time to plan for the future and what we will pursue in the months to come.

</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>March (Chaste Moon): All is new, fresh, and virginal as life begins anew. The antiquated word for pure reflects the custom of greeting the new year with a clear consciousness. Now we can begin to plant the seeds of desire.
</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>April (Seed Moon): Spring is in the air. This is the time of sowing seeds (spiritual or physical), the time when we physically put our desires into motion.
</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>May (Hare Moon): The sacred animal was associated in Roman legends with springtime and fertility. All life is blossoming forth. Now is the time we use the creative spirit to reaffirm our goals.
</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>June (Dyad Moon): Dyad is the Latin name for pair, the twin stars of Castor and Pollux. This is a time of equality, Union of opposites, and duality. It is time to seek balance between our spiritual and physical desires.
</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>July (Mead Moon): Mead was the traditional beverage in old Europe. This was a time for working to preserve some of those crops (mostly for wine- and ale-making) for winter and future use. It is the time to plan for what we will do when we reach our goals.
</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>August (Wort Moon): Wort is the Anglo-Saxon term for herb or green plant. This is the first harvest and a time to celebrate. It is a good time to plan for preserving what we have attained.
</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>September (Barley Moon): We enter the sign of Virgo, the virgin who carries sheaves of barely and grain. This is the great harvest, a time for celebration and the realization of desired goals.
</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>October (Blood Moon): This moon marks the season of hunting and the slaughter of the animals for winter food and clothing. Blood is the force of life. Now is the time for thanksgiving, rest, and reflection.
</Paper>
                </Grid>
            </Grid>
        </div>
    );
}

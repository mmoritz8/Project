import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

const MoonOne = () => {

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
            />
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    January (Wolf Moon):
                    </Typography>
                <Typography>
The wolf is a fearsome creature
of the night and a companion to the Witch and Shaman.
The wolf protects and guards his home and family. This is a
time to protect what we have as we consider new options.
February (Storm Moon): A storm is said to rage most
fiercely just before it ends, and the year usually follows suit.
The end of winter, death, and darkness is coming. It is time
to plan for the future and what we will pursue in the months
to come.                    </Typography>
            </CardContent>
        </Card>
    )
}

export default MoonOne
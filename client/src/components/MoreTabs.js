import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import SCR from '../pages/SCR';
import Chakra from '../pages/Chakra';
import FullReading from '../pages/FullReading'
import Moon from '../pages/Moon';
import '../index.css'

import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

export default function MoreTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <a href="/SCR" component={SCR}> <Tab label="1 Card Reading" /></a>
                <a href="/FCR" component={FullReading}> <Tab label="10 Card" /></a>
                <a href="/chakra" component={Chakra}> <Tab label="Chakras" /></a>
                <a href="/moon" component={Moon}> <Tab label="Moon Times" /></a>

            </Tabs>
        </div >
    );
}

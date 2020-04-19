import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Create from '../pages/Create';
import FavoritesList from '../pages/FavoritesList'
import Detail from '../pages/Detail'
import Home from '../pages/Home';

import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
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
        <a href="/home" component={Home}> <Tab label="Home" /></a>
        <a href="/create" component={Create}> <Tab label="Create" /></a>
        <a href="/posts/:id" component={Detail}> <Tab label="Detail" /></a>
        <a href="/favorites" component={FavoritesList}> <Tab label="Favorites" /></a>
      </Tabs>
    </div >
  );
}

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Detail from "./pages/Detail";
import Chakra from "./pages/Chakra";
import Moon from "./pages/Moon";
import Signup from './pages/Signup'

import SCR from "./pages/SCR";
import FullReading from './pages/FullReading';
import NoMatch from "./pages/NoMatch";
import { StoreProvider } from "./utils/GlobalState";
import FavoritesList from "./pages/FavoritesList";

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/create" component={Create} />
            <Route exact path="/" component={Signup}/>
            <Route exact path="/favorites" component={FavoritesList} />
            <Route exact path="/posts/:id" component={Detail} />
            <Route exact path="/SCR" component={SCR}></Route>
            <Route exact path="/FCR" component={FullReading}/>
            <Route exact path="/chakra" component={Chakra}/>
            <Route exact path="/moon" component={Moon}/>
            <Route component={NoMatch} />
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;

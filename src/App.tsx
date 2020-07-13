import React from 'react';
import { Switch, Route } from "react-router-dom";

import SearchPage from "./containers/SearchPage";
import './styles/index.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"} component={SearchPage}/>
      </Switch>
    </div>
  );
}

export default App;

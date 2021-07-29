
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import { history } from "../redux/configureStore";
// import { useDispatch, useSelector } from "react-redux";

// import { useEffect } from "react";

import  PostWrite  from "../pages/PostWrite";
import './App.css';

function App() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/postwrite" component={PostWrite} exact />
      </Switch>
  </ConnectedRouter>
  
  );
}

export default App;

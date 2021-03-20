import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './index.css'
import HomeScreen from './Screens/HomeScreen';
import PlayerScreen from './Screens/PlayerScreen';



 

  
const App = () => {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeScreen}/>
        <Route path="/player" component={PlayerScreen}/>
      </Switch>
   
    </Router>
  )
};
export default App;

import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Footer from './components/main/Footer';
import Nav from './components/main/Nav';
import './index.css'
import HomeScreen from './Screens/HomeScreen';
import PlayerScreen from './Screens/PlayerScreen';



 

  
const App = () => {

  return (
    <Router>
      <Nav/>
      <Switch>
        <Route path="/" exact component={HomeScreen}/>
        <Route path="/player/lebron" component={PlayerScreen}/>
      </Switch>
    <Footer/>
    </Router>
  )
};
export default App;

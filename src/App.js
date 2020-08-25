import React, { Component } from 'react';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';
import DrillsNav from '../src/drills-nav/drills-Nav';
import './App.css'
import { Route, Link } from 'react-router-dom';

class App extends Component {
 
  routerNav() {
    return (
      <>
        <ul style={{listStyle: "none"}}>
          <li><Link to="/hello">Hello Drill</Link></li>
          <li><Link to="/kitty">Kitty Drill</Link></li>
          <li><Link to="/bomb">Bomb Drill</Link></li>
        </ul>

      </>
    )
  }


  render() {
    return (
      <div className="App">
        <Route path="/" >
          
          <Link to="/"><h1>This is the Main Page</h1></Link>
            <h2>Select a drill </h2>
              <nav >{this.routerNav()}</nav>
          
          
            <Route path='/hello' component={HelloWorld}/>
            <Route path='/bomb' component={Bomb}/>
            <Route path="/kitty" component={RouletteGun}/>
          {/* // <RouletteGun catLives={9} /> */}
        </Route>

      </div>
    );
  }
}

export default App;

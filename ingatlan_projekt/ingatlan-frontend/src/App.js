import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Kezdolap from './components/Kezdolap';
import Hirdetesek from './components/Hirdetesek';
import Regisztracio from './components/Regisztracio';
import Bejelentkezes from './components/Bejelentkezes';
import NavBar from './components/NavBar'; 
import KeresesiUrlap from './components/KeresesiUrlap'; 
import './i18n';


function App() {
  return (
    <Router>
      <NavBar /> 
      <div className="container mt-3"> 
       <KeresesiUrlap />
       <Switch>
        <Route path="/" exact component={Kezdolap} />
        <Route path="/hirdetesek" component={Hirdetesek} />
        <Route path="/regisztracio" component={Regisztracio} />
        <Route path="/bejelentkezes" component={Bejelentkezes} />
       </Switch>
      </div>
    </Router>
  );
}

export default App;


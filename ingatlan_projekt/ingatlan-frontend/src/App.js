import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Kezdolap from './components/Kezdolap';
import Hirdetesek from './components/Hirdetesek';
import Regisztracio from './components/Regisztracio';
import Bejelentkezes from './components/Bejelentkezes';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Kezdolap} />
        <Route path="/hirdetesek" component={Hirdetesek} />
        <Route path="/regisztracio" component={Regisztracio} />
        <Route path="/bejelentkezes" component={Bejelentkezes} />
      </Switch>
    </Router>
  );
}

export default App;


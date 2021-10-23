import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import InventoryView from './components/InventoryView';
import Login from './components/Login';
import React from  'react';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path = "/components">
            <InventoryView/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

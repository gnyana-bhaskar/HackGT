import logo from './logo.svg';
import './App.css';
import './App.css';
import Home from "./components/Home";
import NavBar from './components/NavBar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import InventoryUpdate from './components/InventoryUpdate';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div>
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home>

          </Home>
        </Route>

        <Route exact path="/inventoryupdate">
          <InventoryUpdate/>
        </Route>
        <Route exact path="/dashboard">
      <Dashboard></Dashboard>
        </Route>
      </Switch>
    </Router>

  </div>
  );
}

export default App;

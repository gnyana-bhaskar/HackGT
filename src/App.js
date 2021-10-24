import logo from './logo.svg';
import './App.css';
import './App.css';
import Home from "./components/Home";
import NavBar from './components/NavBar';
import InventoryView from './components/InventoryView'
import MyElement from './components/GoogleMaps';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import InventoryUpdate from './components/InventoryUpdate';
import Dashboard from './components/Dashboard';
import CV from './components/CV'

function App() {
  return (
    <div>
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <MyElement></MyElement>
        </Route>
        <Route exact path="/CV">
          <CV></CV>
        </Route>

        <Route exact path="/inventoryupdate">
          <InventoryView/>
        </Route>
        <Route exact path="/inventoryview">
          <InventoryView/>
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

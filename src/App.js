import logo from './logo.svg';
import './App.css';
import './App.css';
import Home from "./components/Home";
import NavBar from './components/NavBar';
import InventoryView from './components/InventoryView';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import InventoryUpdate from './components/InventoryUpdate';
import Dashboard from './components/Dashboard';
import CV from './components/CV'
import Tableau from './components/Tableau';
import MapContainer from './components/MapContainer';

function App() {
  return (
    <div>
    <Router>
      <NavBar/>
      <Switch>
      <Route exact path="/">
        <Home></Home>
        </Route>
        <Route exact path="/maps">
          <MapContainer></MapContainer>
        </Route>
        <Route exact path="/CV">
          <CV></CV>
        </Route>
        <Route exact path="/tab">
          <Tableau></Tableau>
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

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import EmployeesList from './components/EmployeesList';
import EmployeeDetails from './components/EmployeeDetails';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import Reports from './components/Reports';
import Settings from './components/Settings';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="d-flex flex-row">
        <Sidebar />
        <div className="main-wrapper">
          <Switch>
            <Route exact path="/employees">
              <EmployeesList />
            </Route>
            <Route path="/employees/:id">
              <EmployeeDetails />
            </Route>
            <Route exact path="/addemployee">
              <AddEmployee />
            </Route>
            <Route exact path="/updateemployee/:id">
              <UpdateEmployee />
            </Route>
            <Route exact path="/reports">
              <Reports />
            </Route>
            <Route exact path="/settings">
              <Settings />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

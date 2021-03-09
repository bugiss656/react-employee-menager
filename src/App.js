import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import EmployeesList from './components/EmployeesList';
import EmployeeDetails from './components/EmployeeDetails';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import Reports from './components/Reports';
import Settings from './components/Settings';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';


const App = () => {

  const [alert, setAlert] = useState(null);

  const handleAlert = (type, message, display) => {
    setAlert({
      type: type,
      message: message,
      display: display
    });
  }


  return (
    <Router>
      <Navbar />
      <div className="d-flex flex-row">
        <Sidebar />
        <div className="main-wrapper">
          <Switch>
            <Route exact path="/employees">
              <EmployeesList alert={alert} handleAlert={handleAlert} />
            </Route>
            <Route path="/employees/:id">
              <EmployeeDetails alert={alert} handleAlert={handleAlert} />
            </Route>
            <Route exact path="/addemployee">
              <AddEmployee handleAlert={handleAlert} />
            </Route>
            <Route exact path="/updateemployee/:id">
              <UpdateEmployee handleAlert={handleAlert} />
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

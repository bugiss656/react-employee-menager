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

  const handleDisplayAlert = (type, message, display) => {
    setAlert({
      type: type,
      message: message,
      display: display
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const handleHideAlert = () => {
    setAlert(null);
  }

  return (
    <Router>
      <Navbar />
      <div className="d-flex flex-row">
        <Sidebar />
        <div className="main-wrapper">
          <Switch>
            <Route exact path="/employees">
              <EmployeesList alert={alert} handleDisplayAlert={handleDisplayAlert} handleHideAlert={handleHideAlert} />
            </Route>
            <Route path="/employees/:id">
              <EmployeeDetails alert={alert} handleDisplayAlert={handleDisplayAlert} handleHideAlert={handleHideAlert} />
            </Route>
            <Route exact path="/addemployee">
              <AddEmployee handleDisplayAlert={handleDisplayAlert} />
            </Route>
            <Route exact path="/updateemployee/:id">
              <UpdateEmployee handleDisplayAlert={handleDisplayAlert} />
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

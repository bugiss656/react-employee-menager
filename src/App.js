import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import EmployeesList from './components/EmployeesList';
import AddEmployee from './components/AddEmployee';
import Reports from './components/Reports';
import Settings from './components/Settings';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FetchData from './hooks/FetchData';


const App = () => {
  const { data: employees, isLoading, error } = FetchData('http://localhost:5000/employees');

  return (
    <div>
      <Router>
        <Navbar />
        <div className="d-flex flex-row">
          <Sidebar />
          <Switch>
            <Route path="/employeeslist" exact >
              {error && <div>{error}</div>}
              {isLoading && <div>Loading...</div> }
              {employees && <EmployeesList employees={employees}/>}
            </Route>
            <Route path="/addworker" exact>
              <AddEmployee />
            </Route>
            <Route path="/reports" exact>
              <Reports />
            </Route>
            <Route path="/settings" exact>
              <Settings />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

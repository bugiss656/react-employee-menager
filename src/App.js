import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import EmployeesList from './components/EmployeesList';
import AddWorker from './components/AddWorker';
import Reports from './components/Reports';
import Settings from './components/Settings';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => {
  const [employees, setEmployees] = useState(null);


  useEffect(() => {
    const sendRequest = async () => {
      const allEmployees = await fetchEmployees();
      setEmployees(allEmployees);
    }

    sendRequest();
  }, []);


  const fetchEmployees = async () => {
    const res = await fetch('http://localhost:5000/employees');
    const data = await res.json();

    return data;
  }

  
  return (
    <div>
      <Router>
        <Navbar />
        <div className="d-flex flex-row">
          <Sidebar />
          <Switch>
            <Route path="/employeeslist" exact >
              {employees && <EmployeesList employees={employees}/>}
            </Route>
            <Route path="/addworker" exact>
              <AddWorker />
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

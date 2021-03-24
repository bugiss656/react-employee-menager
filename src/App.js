import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import EmployeesList from './components/EmployeesList';
import EmployeeDetails from './components/EmployeeDetails';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import Reports from './components/Reports';
import Settings from './components/Settings';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {  global_light_theme,
          sidebar_light_theme,
          global_dark_theme,
          sidebar_dark_theme } from './themes/themes';


const App = () => {
  if(!localStorage.getItem('theme')) {
    localStorage.setItem('theme', '');
  }
  
  const [colorTheme, setColorTheme] = useState(() => localStorage.getItem('theme'));
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

  useEffect(() => {
    if(colorTheme === 'dark') {
      document.body.classList.remove("body-light-theme");
      document.body.classList.add("body-dark-theme");
      localStorage.setItem('theme', 'dark');
    }else if(colorTheme === 'light') {
      document.body.classList.remove("body-dark-theme");
      document.body.classList.add("body-light-theme");
      localStorage.setItem('theme', 'light');
    }
  });

  return (
    <div className="App">
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
                <Settings colorTheme={colorTheme} setColorTheme={setColorTheme} />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;

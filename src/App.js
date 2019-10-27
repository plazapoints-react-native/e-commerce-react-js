import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" render={(props) => <Login {...props} />} />
          <Route path="/dashboard" render={(props) => <Dashboard {...props} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

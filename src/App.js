import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Method1 from './Method1';
import Method2 from './Method2';
import Method3 from './Method3';

import Home from './Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          
        <Route exact path="/">
            <Home/>
          </Route> 
          <Route exact path="/method1">
            <Method1/>
          </Route> 
          <Route exact path="/method2">
            <Method2/>
          </Route>
          <Route exact path="/method3">
            <Method3/>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;

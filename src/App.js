import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sponsors from './components/sponsors/Sponsors.js';

function App() {
   return (
      <div>
         <Router>
            <Switch>
               <Route path="/sponsors">
                  <Sponsors />
               </Route>
            </Switch>
         </Router>
      </div>
   );
}

export default App;

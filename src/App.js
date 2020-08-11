import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Menu from './components/Menu/Menu';
import routes from './routes';

let  showContentMenu = (routes) => {
  let result = null
  if (routes.length > 1){
    result = routes.map ((route, index)=> {
      return (
        <Route
        key = {index}
        path = {route.path}
        exact = {route.exact}
        component = {route.main}
      />
      )
    })
  } 
  return result
}

function App() {
  return (
    <Router>
      <Menu/>
      {/* content */}
      <div className="container">
        <Switch>
          {showContentMenu(routes)}
        </Switch>
        
      </div>
      
    </Router>
  );
}

export default App;

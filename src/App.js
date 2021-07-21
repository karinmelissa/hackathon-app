import React, { useState } from 'react';
import './style/App.css';
import Login from './views/Login';
import { HomeDashboard } from './views/HomeDashboard';
import { ProtectedRoute } from './ProtectedRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import { AdminProfile } from './views/AdminProfile';
import { auth } from './firebaseConfig'; 


function App() {
  const [isAuth, setisAuth] = useState();
  const userLogedin=()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setisAuth(true)
        console.log('Usuario logueado', isAuth)
      }
      else{
        setisAuth(false)
      }
    })
  }
  return (
    <div className="App">
      <header className="App-header">
      </header>
      {userLogedin()
      }
      <Router>
        <Switch>
          <ProtectedRoute path='/adminview' component={AdminProfile} isAuth={isAuth}/>
          <ProtectedRoute path='/dashboard'component={HomeDashboard} isAuth={isAuth}/>
          <Route exact path='/' component={Login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

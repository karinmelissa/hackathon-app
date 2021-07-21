import React from 'react';
import './style/App.css';
import Login from './views/Login';
import { HomeDashboard } from './views/HomeDashboard';
import { ProtectedRoute } from './ProtectedRoute';
import {SignInUser}  from './views/SignInUser';
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import { AdminProfile } from './views/AdminProfile';
import { auth } from './firebaseConfig'; 

const userLogedin=()=>{
  auth.onAuthStateChanged((user)=>{
    if(user){
      localStorage.setItem('isAuth', true)
    }
    else{
      localStorage.setItem('isAuth', false)
    }
  })
} 

function App() { 
  userLogedin()
  
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Router>
        <Switch>
          <ProtectedRoute path='/newadmin' component={AdminProfile}/>
          <ProtectedRoute path='/dashboard'component={HomeDashboard}/>
          <ProtectedRoute path='/signin'component={SignInUser}/>
          <Route exact path='/' component={Login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import './style/App.css';
import Login from './components/Login';
import SignOut from './components/SignOut';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import SidebarAdm from './components/SidebarAdm';

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
      console.log('Usuario logueado', user.email)
    }
    else{
      console.log('No hay usuario')
    }
  })
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      
     
      {userLogedin()
      }
      <Router>

        <Switch>
          <Route path='/adminview'>
            <SignOut />
            <AdminProfile/> 
            <SidebarAdm />
          </Route>

          <Route path='/dashboard'>
            <SignOut />
            <Sidebar />
            <Dashboard /> 
          </Route>

          <Route path='/'>
            <SignOut />
            <Login/>
          </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;

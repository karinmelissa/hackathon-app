import './style/App.css';
import Login from './components/Login';
import SignOut from './components/SignOut';
import  Login  from './components/Login'
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
      <SignOut />
      <Login />
      {userLogedin()
      }
      <Router>
        <Switch>
          <Route path='/adminview'>
            <AdminProfile/>
          </Route>
          <Route path='/'>
            <Login/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

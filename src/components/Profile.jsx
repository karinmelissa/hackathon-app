import { db } from '../firebaseConfig';
import React from 'react';
import { Button } from 'react-bootstrap';

import { useParams } from "react-router-dom";
import SignIn from './SignIn';
import ReactDOM from 'react-dom';
// import { Login } from '../views/Login';



const getSignIn = () =>{
  return (
    ReactDOM.render (
    <SignIn />, document.getElementById('profile-update'))
  )
}




const Profile = () => {

  let { usermail } = useParams();
  console.log(`hola ${usermail}`);
 

  let [skills, setSkills] = React.useState([]); 
  React.useEffect(() => {
   
    const gettingData = async () =>{
     try{
        const data = await db.collection('oferta').get()
        const dataArray = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        const username = dataArray.filter((doc)=> doc.Email === usermail)
        setSkills(username);
     }catch(err){
        console.log(err)
     }
      
    } 
    gettingData();
      
  }, []);     
  
      return(
          <>
                <h2> Perfil de usuario </h2>
                  {skills.map(item =>(
                <>
                    <ul key = {item.id}>
                        <li className="list-group-item" > {item.Nombre} </li>
                        <li className="list-group-item" > Habilidades: {item.Skills} </li>
                        <li className="list-group-item" > Otros: {item.Otros} </li>
                    </ul>
                    <div>
                      <Button className="login-btn" id="profile-btn" onClick={getSignIn}> Actualizar </Button>
                    </div>
                    <div>
                      <Button className="login-btn" id="profile-btn"> Validar  </Button>
                    </div>
                    
                </>
                  ))
                  }
                
             
              
              
          </>
      )
  }
  

export default Profile;
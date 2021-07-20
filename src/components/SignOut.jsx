// const functions = require('firebase-functions');
// const admin = require ('firebase-admin');
// admin.initializeApp();

// exports.addAdminRole = functions.https.onCall((data, context) =>{
//     return admin.auth.getUserByEmail(data.email).then((user)=>{
//         return admin.auth.setCustomUserClaims(user.uid, {
//             admin:true
//         })
//     }).then(()=>{
//         return {
//             message: `Accion exitosa! el usuario ${data.email} ahora es un administrador`
//         }
//     }).catch(err =>{
//         return err;
//     });
// });


// Sign out
 
import { Button }  from 'react-bootstrap';
import { auth } from '../firebaseConfig';

  const SignOut = ()=> {


    return(
      <>
        <Button  onClick = { () =>{
            auth.signOut().then(() => {
                // Sign-out successful.
              }).catch((error) => {
                // An error happened.
              });
        }      
        }> Log out
        
        </Button>
      
     
      </>
    )
  }


  export default SignOut;

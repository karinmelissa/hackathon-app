
import { db } from '../firebaseConfig';
import React from 'react';
// import { Grid } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

// const workersSkills = db.collection('oferta').get().then((snapshot) => {
//   snapshot.docs.forEach(doc => {
//     const data = doc.data();
//     data.id = doc.id;
//     const skills= data.Skills;
    
    
//   })
// });


const Dashboard = () => {
    
  let [skills, setSkills] = React.useState([]); 
  React.useEffect(() => {
  
    const gettingData = async () =>{
     try{
        const data = await db.collection('oferta').get()
        const dataArray = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        console.log(dataArray);
        setSkills(dataArray);
     }catch(err){
        console.log(err)
     }
      
    } 
    gettingData();
      
  }, []);     
  
      return(
          <>
              <div> 
                <h1> Dashboard! </h1>
                <ul>
                  {skills.map(item =>(
                    <li className="list-group-item" key = {item.id}> {item.Skills} </li>
                  ))
                  }
                </ul>
              </div>
              
              
          </>
      )
  }
  



// const Dashboard = () => {
    

// React.useEffect(() => {

//   // let [skills, setSkills] = React.useState([]); 
//    const gettingData = async () =>{
      
//         const data = await db.collection('oferta').get().then((snapshot) => {
//           snapshot.docs.forEach(docs => {
//               // const data = docs.data();
//               // console.log(data);
//               const dataArray = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
//               console.log(dataArray)
//           })
//         });
//    } 
//    gettingData();
    
// }, []);     

//     return(
//         <>
//             <h1> Dashboard!</h1>
            
            
//         </>
//     )
// }







export default Dashboard;
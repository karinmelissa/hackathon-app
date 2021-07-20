
import { db } from '../firebaseConfig';
import React, { useState, useEffect } from 'react';
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
    let [items, setItems] = useState([]); 

    useEffect(() => {
    
    db.collection('oferta').get().then((snapshot) => {
        setItems(snapshot.docs.forEach(doc => { 
          const data = doc.data();
          return data
        }
      
      )); 
    })      
  }, [items]);     

    return(
        <>
            <h1> Dashboard!</h1>
            {/* <ol> 
          
              {items.map((item)=> {
                  return(
                      <>
                        
                        <ul > {item} 
                      
                        
                        </ul>
                          
                      </>
                  )
              })} 
             
            </ol>*/}
            
            
        </>
    )
}







export default Dashboard;
import { db } from '../firebaseConfig';
import React from 'react';

const Search = () => {
    
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
                <h1> Buscar </h1>
                <ul className="user-list">
                  {skills.map(item =>(
                    <div className="user-container">
                      <li className="user-info" id={item.Nombre}>
                      <figure>
                        <div className="user-number">Nombre: {item.Nombre}</div>
                        <div className="user-number">Número: {item.Numero}</div>
                        {/* <div className="user-skills">Skills: {item.Skills}</div> */}
                      </figure>
                      </li>
                    </div>
                    
                  ))
                  }
                </ul>
              </div>
              
              
          </>
      )
  }

export default Search;


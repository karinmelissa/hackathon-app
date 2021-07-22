import { db } from '../firebaseConfig';
import React from 'react';
import { useState } from 'react';

const Search = () => {

  let [skills, setSkills] = useState([]);
  const [busqueda, setBusqueda]= useState("");
  

  React.useEffect(() => {

    const gettingData = async () => {
      try {
        const data = await db.collection('oferta').get()
        const dataArray = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        setSkills(dataArray);
      } catch (err) {
        console.log(err)
      }

    }
    gettingData();

  }, []);

  //Función para obtener el valor del input
  const handleChange = e =>{
    setBusqueda(e.target.value);
    console.log(e.target.value)
  }

  return (
    <>
      <div className="profileContainer">
        <h2 className="profile"> Nuestros colaboradores ... </h2>
        <div className="user">
          <ul className="user-list">
            {skills.map(item => (
              <div className="user-container">
                <li className="user-info" id={item.Nombre}>
                  <figure>
                    <div className="user-number">{item.Nombre}</div>
                    <div className="user-number"> {item.Numero}</div>
                    <div className="user-number"> {item.Email}</div>
                    <a className="link-color" href ={`/userprofile/${item.Email}`}> Ver más...</a>
                  </figure>
                </li>
              </div>
            ))
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default Search;


import { db } from '../firebaseConfig';
import React from 'react';


const Dashboard = () => {
  let [demandedSkills, setDemandedSkills] = React.useState([]);
  let [skills, setSkills] = React.useState([]);
  React.useEffect(() => {
    const gettingDataOffert = async () => {
      try {
        const data = await db.collection('oferta').get()
        const dataArray = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        const Skills = dataArray.map((e)=>e.Skills).toString()
        //console.log(Skills)
        //console.log(dataArray);
        setSkills(dataArray);
      } catch (err) {
        console.log(err)
      }
    }
    const gettingDataDemmand = async () => {
      try {
        const data = await db.collection('demanda').get()
        const dataArray = data.docs.map((doc) => ({ id: doc.id, ...doc.data().Tecnology }))
        console.log(dataArray.Tecnology);
        setDemandedSkills(dataArray);
      } catch (err) {
        console.log(err)
      }
    }
    gettingDataOffert();
    gettingDataDemmand();
  }, []);

  return (
    <>
      <div >
        <h1> Dashboard! </h1>
        {/*<ul>
          {skills.map(item => (
            <li className="list-group-item" key={item.id}> {item.Skills} </li>
          ))
          }
        </ul>
        */}
      </div>
    </>
  )
}


export default Dashboard;



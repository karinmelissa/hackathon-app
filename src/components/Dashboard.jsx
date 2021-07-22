import { db } from '../firebaseConfig';
import React from 'react';
import { Pie } from 'react-chartjs-2';


const Dashboard = () => {
  let [tecnologies, setTecnologies] = React.useState([]);
  let [quantity, setQuantity] = React.useState([]);
  let [tecnologiesdemanda, setTecnologiesDemanda] = React.useState([]);
  let [quantityDemanda, setQuantityDemanda] = React.useState([]);

  React.useEffect(() => {
    const gettingDataDemmand = async () => {
      try {
        const data = await db.collection('demanda-resumen').get()
        const dataArray = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        const ourData = dataArray[0]
        console.log(ourData.skills , ourData.cantidad);
        setTecnologiesDemanda(ourData.skills);
        setQuantityDemanda(ourData.cantidad)
      } catch (err) {
        console.log(err)
      }
    }
    const gettingDataOffert = async () => {
      try {
        const data = await db.collection('resumen').get()
        const dataArray = data.docs.map((doc) => ({ ...doc.data()}))
        const ourData = dataArray[0]
        setTecnologies(ourData.skills)
        setQuantity(ourData.cantidad)
      } catch (err) {
        console.log(err)
      }
    }
    gettingDataOffert();
    gettingDataDemmand();
  }, []);

  const data={
    labels : tecnologies,
    datasets : [{
      label : 'tecnologies',
      data : quantity,
      backgroundColor:['#6785C1','#B9D305','#8E908F','#F0A35C','#008081', '#E6B600', '#083B254', '#AA3C80']
    }]
  }
  const opciones ={
    responsive: true
  }
  const dataDemmand={
    labels : tecnologiesdemanda,
    datasets : [{
      label : 'tecnologies',
      data : quantityDemanda,
      backgroundColor:['#6785C1','#B9D305','#8E908F','#F0A35C','#008081', '#E6B600', '#083B254', '#AA3C80']
    }]
  }

  return (
    <>
      <div className='dashboardGraphics'>
        <div className='demandaContainer'>
          <h4 className='profile'>Lo que nuestros clientes necesitan</h4>
          <p>En everis trabajamos con cientos de empresas de distintas areas e industrias del pais y de Latam, es por esto que requerimos de distintos perfiles para cubrir nuestra demanda</p>
          <p>Esto es lo que ellos estan buscando de nosotros</p>
          <Pie className='grafico' data={dataDemmand} options={opciones}/>
        </div>
        <div className='ofertaContainer'>
          <h4 className='profile'>Nuestro talento....</h4>
          <p>Los colaboradores de Everis son un talento de habilidades y conocimiento diverso, pudiendo crear equipos de trabajo que respondan con las necesidades de nuestros clientes.</p>
          <p>En el siguiente grafico podemos ver en que areas de desarollo van apuntado nuestros compañeros de trabajo</p>
          <Pie className='grafico' data={data} options={opciones}/>
        </div>
      </div>
    </>
  )
}


export default Dashboard;



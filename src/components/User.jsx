/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';


const User = () => {


  return (
    
    <div className="mt-5">
      <h6 className="text-top mt-9">
        <p>Crea un usuario</p>
        <p>Completa la siguiente informacion para crear un perfil.</p>
      </h6>
      <hr />
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
        <form>
          <table className="table-user">
            <label>Nombre</label>
              <input
                className="form-control mb-4"
                placeholder="Inserta tu nombre aqui"
                />
                <br></br>
              <label>Correo:</label>
              <input
                className="form-control mb-2"
                placeholder="example@correo.com"
                />
                <br></br>
              <label>Contraseña:</label>
              <input
                className="form-control mb-2"
                placeholder="**********"
                />
                <br></br>
              <label>Confirmar contraseña:</label>
              <input
                className="form-control mb-2"
                placeholder="**********"
                />              
                <br></br>                
              <button 
                className="btn btn-dark btn-sm btn-block mb-2"
                onClick="Guardar()">
                Guardar
              </button>
              <br></br>
          </table>
        </form>
        </div>
      </div>
    </div>
   );
}

export default User

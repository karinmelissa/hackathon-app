import React from 'react';

const SignIn = () => {


  return (
    
    <div className="mt-5">
      <h6 className="text-center">
        <p>Informacion sobre ti</p>
      </h6>
      <hr />

      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          
            <input
              type="n°empleado"
              className="form-control mb-2"
              placeholder="123456"
            />
            <input
              type="Cargo o stack:"
              className="form-control mb-2"
              placeholder="ej: Full-stack developer"
            />
             <input
              type="Años de experiancia:"
              className="form-control mb-2"
              placeholder="example@correo.com"
            />
             <input
              type="Skills:"
              className="Selecciona tus habilidades"
              placeholder="ej: Full-stack developer"
            />
             <input
              type="Otros:"
              className="form-control mb-2"
              placeholder="ej: hobbies, actividades, etc..."
            />

            <button
              className="btn btn-success btn-lg btn-block mx-2 mb-2"
              type="submit">
            </button><br></br>
        </div>
      </div>
    </div>
   );
}

export default SignIn

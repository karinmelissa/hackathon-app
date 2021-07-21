import React from 'react';
import firebase from 'firebase/app';
import {useHistory} from 'react-router-dom';



const SignIn = () => {
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [error, setError] = React.useState(null);
  const [isRegistration, setIsRegistration] = React.useState('true');
  const auth = firebase.auth();
  const history = useHistory();

  const toProcessData = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('You must enter an email!');
      return;
    }
    if (!pass.trim()) {
      setError('You must enter an password!');
      return;
    }
    if (pass.length < 6) {
      setError('Password of 6 characters or more');
      return;
    }
    setError(null);

    if (isRegistration) {
      toRegister();
    } else {
      // toAccess();
    }
  };

  const toRegister = React.useCallback(async () => {
    try {
      const answer = await auth.createUserWithEmailAndPassword(email, pass);
      console.log(answer.user);
      await firebase.firestore().collection('users').doc(answer.user.email)
          .set({
            email: answer.user.email,
            uid: answer.user.uid,
          });
      await firebase.firestore().collection(answer.user.email).add({
        name: 'Post',
        fecha: Date.now()
      })
      setEmail('');
      setPass('');
      setError(null);
      history.push('/home');
    } catch (error) {
      console.log(error);
      if (error.code === 'auth/invalid-email') {
        setError('Invalid email');
      }
      if (error.code === 'auth/email-already-in-use') {
        setError('Email already registered');
      }
    }
  }, [auth, email, history, pass]);

  return (
    
    <div className="mt-5">
      <h6 className="text-center">
        {
          isRegistration ? 'Informacion sobre ti' : 'Login'
        }
      </h6>
      <hr />
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <form onSubmit={toProcessData}>
            {
              error ? (
                <div className="alert alert-danger">
                  {error}
                </div>
              ) : null
            }
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
              {
                isRegistration ? 'SIGN UP' : 'LOG IN'
              }
            </button><br></br>
            <button
              className="btn btn-dark btn-sm btn-block mb-2"
              onClick={() => setIsRegistration(!isRegistration)}
              type="button"
            >
              {
                isRegistration ? 'Already registered?' : 'New here?'
              }
            </button>
          </form>
        </div>
      </div>
    </div>
   );
}

export default SignIn

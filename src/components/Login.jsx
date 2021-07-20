import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { auth } from '../firebaseConfig';
import logo from '../img/logo.png';
import ever from '../img/ever.png';


const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [msgerror, setMsgError] = useState(null);
    const style = { color: 'red' };
  
    const LoginUser = (e) => {
      auth.signInWithEmailAndPassword(email, pass)
        .then((r) => console.log("inicio sesion", r))
        .catch((err) => {
          const { code } = err;
          switch (code) {
            case 'auth/invalid-email':
              setMsgError('Formato de correo invalido');
              break;
            case 'auth/user-not-found':
              setMsgError('Usuario no registrado');
              break;
            default: setMsgError('');
          }
        });
    };
  
    return (
      <div className="login-container">
        <div className="form-container">
          <div>
            <img src={logo} className="logo" alt="" />
          </div>
          <div className="form">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <div>
                  <Form.Label>Correo:</Form.Label>
                </div>
                <Form.Control
                  onChange={(e) => { setEmail(e.target.value); }}
                  type="email"
                  placeholder="Ingresa tu correo aquí"
                />
                <Form.Text className="text-muted" />
              </Form.Group>
    
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <div>
                  <Form.Label>Contraseña:</Form.Label>
                </div>
                <Form.Control
                  onChange={(e) => { setPass(e.target.value); }}
                  type="password"
                  placeholder="**********"
                />
              </Form.Group>
            </Form>
            <div>
              <Button
                onClick={(e) => LoginUser(e)}
                variant="primary"
                type="submit"
                className="login-btn"
              >
                Iniciar Sesión
              </Button>
            </div>
            { msgerror && (
            <div style={style}>
              {' '}
              {msgerror}
              {' '}
            </div>
            ) }
          </div>
        </div>
        <div className="img-container">
              <img src={ever} alt="" />
        </div>
      </div>
    );
};
  
export default Login;
  
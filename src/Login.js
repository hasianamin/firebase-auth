import { logInWithEmailAndPassword, signInWithGoogle } from './firebase';
import React from 'react';
import './App.css';

function Login({ setOpenTab }) {
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

  const onLogin = async () => {
    try {
      const result = await logInWithEmailAndPassword(email, password);
      if (result === 'sign in success') {
        setOpenTab(3);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onLoginWithGoogle = async () => {
    try {
      const result = await signInWithGoogle();
      if (result === 'signin with google success') {
        setOpenTab(3);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h3>Login by Email</h3>
      <div>
        <span>email</span>
        <input
          type="email"
          defaultValue={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <span>password</span>
        <input
          type="password"
          defaultValue={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={onLogin}>Submit</button>
      </div>
      <div>
        <button onClick={onLoginWithGoogle}>Signin with Google</button>
      </div>
    </>
  );
}

export default Login;

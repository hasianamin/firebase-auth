import React from 'react';
import './App.css';
import { registerWithEmailAndPassword } from './firebase';

function Register() {
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

  return (
    <>
      <h3>Register by Email</h3>
      <div>
        <span>name</span>
        <input
          type="text"
          defaultValue={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
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
        <button
          onClick={() => registerWithEmailAndPassword(name, email, password)}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Register;

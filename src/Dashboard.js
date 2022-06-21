import { logout } from './firebase';
import React from 'react';
import './App.css';

function Dashboard({ setOpenTab }) {
  const onLogout = () => {
    const result = logout();
    if (result === 'logout success') {
      setOpenTab(2);
    }
  };

  return (
    <>
      <h3>Dashboard</h3>
      <h4>You are login</h4>
      <div>
        <button onClick={onLogout}>Log out</button>
      </div>
    </>
  );
}

export default Dashboard;

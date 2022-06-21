import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Login from './Login';
import Register from './Register';

function App() {
  const [openTab, setOpenTab] = React.useState(1);

  return (
    <div className="App">
      <div>
        {openTab !== 3 && (
          <>
            <button onClick={() => setOpenTab(1)}>Register</button>
            <button onClick={() => setOpenTab(2)}>Login</button>
          </>
        )}
      </div>
      {openTab === 1 && <Register setOpenTab={setOpenTab} />}
      {openTab === 2 && <Login setOpenTab={setOpenTab} />}
      {openTab === 3 && <Dashboard setOpenTab={setOpenTab} />}
    </div>
  );
}

export default App;

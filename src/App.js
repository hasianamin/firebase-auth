import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Login from './Login';
import Register from './Register';
import { handleGetToken, onMessageListener } from './firebase';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Cart from './components/Cart';
import TotalCart from './components/TotalCart';

function App() {
  const [openTab, setOpenTab] = React.useState(1);
  const [isTokenFound, setTokenFound] = React.useState(false);
  handleGetToken(setTokenFound);

  console.log(isTokenFound);

  onMessageListener()
    .then((payload) => {
      console.log(payload);
      alert(payload);
    })
    .catch((err) => alert('failed: ', err));

  return (
    <div className="App">
      {/* {isTokenFound && 'Notification permission enabled 👍🏻'}
      {!isTokenFound && 'Need notification permission ❗️ '}
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
      {openTab === 3 && <Dashboard setOpenTab={setOpenTab} />} */}
      <Provider store={store}>
        <Cart />
        <TotalCart />
      </Provider>
    </div>
  );
}

export default App;

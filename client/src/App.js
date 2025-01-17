import React, { useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [msg, setMsg] = useState('');

  const handleClick = async function(event) {
    const data = await fetch('/api/youtube');
    const jsonData = await data.json();

    console.log(jsonData);

    const msg = jsonData.msg;
    setMsg(msg);
};

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleClick()}>
          Dis Bonjour
        </button>
        <p>{msg}</p>
      </header>
    </div>
  );
}

export default App;

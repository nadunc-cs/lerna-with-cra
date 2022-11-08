import React, { useState } from 'react';
import { Alert, Button } from '@portal/design-system';
import logo from './logo.svg';
import './App.css';

function App() {
  const [visible, setVisible] = useState(false);

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  return (
    <>
      <h1>App1</h1>
      <Button
        label="thi is a button"
        onClick={() => {
          setVisible((current) => !current);
        }}
      />
      {visible && <Alert />}
    </>
  );
}

export default App;

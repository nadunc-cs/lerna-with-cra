import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@portal/design-system2';

function App() {
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
      <h1>App2</h1>
      <Button
        label="label"
        onClick={() => {
          console.log('clicked');
        }}
      />
    </>
  );
}

export default App;

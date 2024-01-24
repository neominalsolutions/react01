import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassComponentSample from './samples/classComponents/ClassComponentSample';
import ClassComponentLifeCycleMethods from './samples/classComponents/ClassComponentLifeCycleMethods';

function App() {

  const style =  {backgroundColor:'yellow', color:'blue', padding:'10px'}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ClassComponentSample sx={style} /> 
         <ClassComponentSample sx={{backgroundColor:'yellow', color:'blue', padding:'10px'}} />
        <hr></hr>
        <ClassComponentSample sx={{backgroundColor:'red', color:'white', padding:'20px'}} />
        <hr></hr>
        <ClassComponentSample />

        <hr></hr>
        <ClassComponentLifeCycleMethods />
      </header>
    </div>
  );
}

export default App;

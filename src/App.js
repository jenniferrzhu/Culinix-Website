import React, { useState } from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import './App.css';

function App() {
  const [text] = useTypewriter({
    words: ['cook, mix, serve', 'your new sous-chef', 'recipes reimagined', 'start cooking smarter'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 120,
  })
  
  return (
    <div className="App">
      <div className="Bg"> 
      <header className="App-header"> 
        <img src="/ChefHat.png" alt="Chef's Hat" /> 
        <h1>
          <span style={{ color: '#cc6600' }}>Culin</span>
          <span style={{ color: '#cb2127' }}>ix</span>
        </h1>
        <h3>
          <span>
            {text} 
          </span>
          <span>
            <Cursor />
          </span> 
        </h3> 
        <div className="search">
          <a>learn culinix</a>
        </div>   
        <div className="search">
          <a href="https://github.com/jenniferrzhu/Culinix">https://github.com/jenniferrzhu/Culinix</a>
        </div>  
        <br></br> 
      </header> 
      </div>
    </div>
  );
}

export default App;

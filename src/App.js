import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; 
import Learn from './components/Learn.tsx';
import Home from './components/Home.tsx';

function App() {
  
  
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/learn" element={<Learn />} /> 
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header  from './components/Header';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Videos from './components/Videos';

function App() {
  return (
    <div className="App" >
       <Header />
       <Routes >
          <Route path='/' element={<HomePage />} /> 
        </Routes>
      
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import Timer from './Timer'
import Play from './Play'
import Pause from './Pause'
import {useState, useEffect} from 'react'
import SettingsContext from './SettingsContext'

function App() {
  return (
    <main>
      <h1>Hydration Monitor</h1> 
      <Timer />
    </main>
  );
}

export default App;
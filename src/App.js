import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import axios from 'axios';
import SeeAllMusic from './components/SeeAllMusic/SeeAllMusic';



function App() {
  let fulllibrary =  axios.get('http://127.0.0.1:8000/api/music/')
  const [ music,setMusic] = useState([{fulllibrary}])

  useEffect(music)

  return (
    <section>
      <button >See List</button>
    </section>
  );
}

export default App;

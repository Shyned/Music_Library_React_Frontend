import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import axios from 'axios';
import FullLibraryTable from "./components/FullLibraryTable/FullLibraryTable";
import AddSong from './components/AddSong/AddSong';
import SearchLibrary from './components/SearchLibrary'



function App() {
  
  const [music,setMusic]=useState([]);

  useEffect(()=>{
    getLibrary();
  },[])

async function getLibrary(){
  let response= await axios.get("http://127.0.0.1:8000/api/music/");
  setMusic(response.data);
}




// displayed on page
  return (
    <section>
      <div className='heading-section'>
        <h1 className='title'>Doc's Music Shop</h1>
      </div>
      <img src="%PUBLIC_URL%/mypic.jpg" />
      <div className='add-music-section'>
      <h2 className='title body-title'>ADD Music</h2>
      <AddSong music = {music}/>
      </div>
      <div className='library-area'>
        <h2 className='title body-title'>Music Library</h2>
        < FullLibraryTable music = {music}/>
      </div>  
    </section>
  );
}

export default App;

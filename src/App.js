import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import axios from 'axios';
import FullLibraryTable from "./components/FullLibraryTable/FullLibraryTable";
import AddSong from './components/AddSong/AddSong';
import SearchResults from "./components/searchResults/searchResults";



function App() {
  
  const [music,setMusic]=useState([]);

  useEffect(()=>{
    getLibrary();
  },[])

async function getLibrary(){
  let response= await axios.get("http://127.0.0.1:8000/api/music/");
  setMusic(response.data);
}

async function newSong(newSong) {
  let response = await axios.post("http://127.0.0.1:8000/api/music/", newSong);
  if (response.status === 201) {
    await getLibrary();
  }
}



// displayed on page
  return (
    <section>
      <div className='heading-section'>
        <h1 className='title'>Doc's Music Shop</h1>
        <SearchResults setMusic ={setMusic} getLibrary={getLibrary} />
        {/* <SearchLibrary music = {music}/> */}
      </div>
      <div className='add-music-section'>
      <h2 className='title body-title'>ADD Music</h2>

      <AddSong music = {music} newSong={newSong} />
      </div>
      <div className='library-area'>
        <h2 className='title body-title'>Music Library</h2>
        < FullLibraryTable music = {music} AddSong = {AddSong}/>
      </div>  
    </section>
  );
}

export default App;

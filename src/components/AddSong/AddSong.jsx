import React, {useState} from "react";



const AddSong = (props)=>{

    const[title,SetTitle] = useState('')
    const[artist,setTitle] = useState('')
    const[album,setAlbum] = useState('')
    const[release_date,setRelease_date] = useState('')
    const[genre,setGenre] = useState('')


    function addToLibrary() {
        
    }


    return(
        <form className="add-music">
            <label>Title</label>
            <input></input>
            <label>Artist</label>
            <input></input>
            <label>Album</label>
            <input></input>
            <label>Release Date</label>
            <input></input>
            <label>Genre</label>
            <input></input>
            <button className="add-song">Submit</button>
        </form>
    )
}


export default AddSong;
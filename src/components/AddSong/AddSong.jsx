import React, {useState} from "react";



const AddSong = (props)=>{

    const[title,setTitle] = useState('')
    const[artist,setArtist] = useState('')
    const[album,setAlbum] = useState('')
    const[release_date,setReleaseDate] = useState('')
    const[genre,setGenre] = useState('')


    function addToLibrary(event) {
        event.preventDefault();
    let newSong = {
      title: title,
      artist: artist,
      album: album,
      release_date: release_date,
      genre: genre,
    };


    props.newSong(newSong);
    setTitle("");
    setArtist("");
    setAlbum("");
    setReleaseDate("");
    setGenre("");
  }

        
    


    return(
        <form className="add-music" onSubmit={addToLibrary}>
            <label>Title</label>
            <input value={title} onChange={(event) =>setTitle(event.target.value)}></input>
            <label>Artist</label>
            <input value={artist} onChange={(event) => setArtist(event.target.value)}></input>
            <label>Album</label>
            <input value={album} onChange={(event) => setAlbum(event.target.value)}></input>
            <label>Release Date</label>
            <input value={release_date}onChange={(event) => setReleaseDate(event.target.value)}></input>
            <label>Genre</label>
            <input value={genre} onChange={(event) => setGenre(event.target.value)}></input>
            <button className="add-song" type="submit">Submit</button>
        </form>
    );
};


export default AddSong;
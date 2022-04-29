import React, { useState } from "react";






  const SearchBar = (props) => {
  const [findmusic, setFindmusic] = useState("");

  function SearchResults(event) {
    event.preventDefault();
    let response = props.music.filter((song) => {
      if (song.album.includes(findmusic)) {
        return true;
      } else if (song.artist.includes(findmusic)) {
        return true;
      } else if (song.title.includes(findmusic)) {
        return true;
      } else if (song.genre.includes(findmusic)) {
        return true;
      } else if (song.release_date.includes(findmusic)) {
        return true;
      }
    });
    console.log(response.data)
    }
  

  return (
      <form onSubmit={SearchResults}>
        <div>
          <input 
            type="text"
            value={findmusic}
            onChange={(event) => setFindmusic(event.target.value)}
          />
          <button className ='search' type="submit">Search</button>
        </div>
      </form>
  );
};

export default SearchBar;


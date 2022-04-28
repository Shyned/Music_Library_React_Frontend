




const FullLibraryTable =(props)=>{
    return(
        <table className="table">
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Release Date</th>
          <th>Genre</th> 
        </tr>
            {props.music.map((songs,index)=>{
                return(
                        <tr>
                            <td>{songs.title}</td>
                            <td>{songs.artist}</td>
                            <td>{songs.album}</td>
                            <td>{songs.release_date}</td>
                            <td>{songs.genre}</td>
                        </tr>

                );
            })}
        </table>
    )

}

export default FullLibraryTable;
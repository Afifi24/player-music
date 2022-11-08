import React from 'react'
import LibrarySong from './librarySongs'
export default function Library({songs,setcurrentSong,audioRef,isplaying,librarystatus,setlibrarystatus}){
    const librarysons = songs.map(song=>
        (
        <LibrarySong
            song={song}
            setcurrentSong={setcurrentSong}
            songs={songs}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isplaying={isplaying}
        />
        )
    )
    return(
        <div className={`library ${librarystatus? 'active-library': "" } `}>
        <h2>library</h2>
        <div className="library-songs">
        {librarysons}
        </div>
        
        </div>
    )
}
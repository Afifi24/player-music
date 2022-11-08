import React from 'react'

 export default function LibrarySong(props){
  function songclickHandler (){
    const selectedSong= props.songs.filter(state=>state.id === props.id)
    props.setcurrentSong(selectedSong[0])
    // props.setcurrentSong(props.song)
      if(props.isplaying){
        const playPromise = props.audioRef.current.play()
        if(playPromise!==undefined){
          playPromise.then(audio=>{
            props.audioRef.current.play()

          })
        }
      }
  }
    return(
        <div onClick={songclickHandler} className={`library-song ${props.song.active? 'selected': ""}`}>
             <img src={props.song.cover} alt="" />
             <div className="song-description" >
           <h3>{props.song.name}</h3>
             <h3>{props.song.artist}</h3>
             </div>
        </div>
    )
}
import React, {useRef, useState} from 'react'
import './styles/app.scss'
import Song from './components/song';
import Player from './components/player';
import data from './util'
import Nav from './components/Nav';
import Library from './components/library';
function App() {
 const [songs, setSongs] =useState(data())
 const [currentSong, setcurrentSong ] =useState(songs[0])
 const [isplaying,setisplaying] = useState(true)
 const audioRef = useRef(0)
 const [songinfo,setsonginfo] = useState({
  currentTime : 0,
  duration: 0,

})
const [librarystatus,setlibrarystatus] = useState(false)
const TimeupdateHandler =(e)=>{
  const current = e.target.currentTime
  const duration =e.target.duration
  setsonginfo({...songinfo,currentTime:current, duration:duration})
}

  return (
    <div className="App">  
    <Nav librarystatus={librarystatus} setlibrarystatus={setlibrarystatus}/>  
      <Song currentSong ={currentSong}/>
      <Player 
      isplaying={isplaying} 
      currentSong ={currentSong}
      setisplaying={setisplaying}
      audioRef={audioRef}
      songinfo={songinfo}
      setsonginfo={setsonginfo}
      songs={songs}
      setSongs ={setSongs}
      setcurrentSong ={setcurrentSong}
      />
      <Library 
      librarystatus={librarystatus}
      setlibrarystatus={setlibrarystatus}
      songs={songs} 
      setcurrentSong={setcurrentSong}
      audioRef={audioRef}
      isplaying={isplaying}
      
      />
       <audio 
           onTimeUpdate={TimeupdateHandler} 
           ref={audioRef} 
           src={currentSong.audio}
           onLoadedMetadata ={TimeupdateHandler}
           ></audio>
    </div>
  );
}

export default App;

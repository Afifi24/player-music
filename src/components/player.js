import React,{useEffect} from 'react'
import {FontAwesomeIcon}from '@fortawesome/react-fontawesome'
import {
    faPause,
    faPlay,
    faAngleLeft,
    faAngleRight,

} from '@fortawesome/free-solid-svg-icons'
 

export default function Player({currentSong,isplaying,setisplaying,audioRef,setsonginfo,songinfo,songs,setSongs,setcurrentSong}){
    

    const playSonghandler = ()=>{
        if(isplaying){
            audioRef.current.play()

            setisplaying(!isplaying)
        }else{
            audioRef.current.pause()

            setisplaying(!isplaying)

        }
    }
    const getTime = (time)=>{
        return(
            Math.floor(time/60)+ ":" + ("0" + Math.floor(time%60)).slice(-2)
        )
    }
    const dragHandler =(e)=>{
        audioRef.current.currentTime = e.target.value
         setsonginfo({...songinfo,currentTime:e.target.value})
    }
    const skiphandler =(direction)=>{
          let currentIndex = songs.findIndex((song)=>song.id === currentSong.id)
          if(direction = 'skip-forward'){
            setcurrentSong( songs[(currentIndex + 1 )% songs.length])
                
    }
          if(direction = 'skip-back'){
            if((currentIndex-1)%songs.length===-1){
                setcurrentSong(songs[songs.length-1])
                return
            }
            setcurrentSong( songs[(currentIndex - 1 )% songs.length])
                
    }
    // useEffect
    //  useEffect(()=>{
        
    //  })


}
    return(
        <div className='player'>
           <div className="time-conttrol">
            <p>{getTime(songinfo.currentTime)}</p>
            <input type="range" min={0} 
            max={songinfo.duration}
            value={songinfo.currentTime}
            onChange={dragHandler}
            />
            <p>{getTime(songinfo.duration)}</p> 
           </div>
           <div className="play-control">
            <FontAwesomeIcon onClick={()=>skiphandler('skip-back')} className = 'skip-back' size ="2x" icon= {faAngleLeft} />
            <FontAwesomeIcon onClick={playSonghandler} 
            className = 'play' size ="2x"  
            icon={isplaying?faPlay:faPause} />
            <FontAwesomeIcon onClick={()=>skiphandler('skip-forward')} className = 'skip-forward' size ="2x" icon ={faAngleRight} />
           
           
           </div>
          
        </div>
    )
}
import React from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import { useContext } from 'react'
import { PlayerContext } from './context/PlayerContext'

const App = () => {
  const {audioRef, track, next, play, playStatus } = useContext(PlayerContext);
  return (
    <>
    <div className='h-screen w-screen bg-[#E0E0E0] dark:bg-[#121212]'>
      <div className='lg:h-[85%] h-[83%] w-full flex'>
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.filePath} preload='auto' onEnded={async()=>{await next()}} onCanPlay={()=>{
        if(playStatus){
          play();
        }
      }}></audio>
    </div>
    </>
  )
}

export default App
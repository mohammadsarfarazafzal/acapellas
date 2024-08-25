import React from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import { useContext } from 'react'
import { PlayerContext } from './context/PlayerContext'

const App = () => {
  const {audioRef, track, next, play } = useContext(PlayerContext);
  return (
    <>
    <div className='h-screen bg-[#121212]'>
      <div className='h-[85%] flex'>
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.filePath} preload='auto' onEnded={async ()=>{
        await next();
        play();
      }}></audio>
    </div>
    </>
  )
}

export default App
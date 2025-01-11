import React from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { useContext } from "react";
import { PlayerContext } from "./context/PlayerContext";

const App = () => {
  const { audioRef, track, next, play, playStatus } = useContext(PlayerContext);
  return (
    <div className="h-screen w-screen bg-[#E0E0E0] dark:bg-[#121212]">
      <div className="h-[85%] w-full flex">
        <Sidebar />
        <div className="lg:w-[75%] w-full h-full overflow-auto">
          <Display />
        </div>
      </div>
      <div className="bg-[#E0E0E0] dark:bg-[#121212]">
        <Player />
      </div>
      <audio
        ref={audioRef}
        src={track.filePath}
        preload="auto"
        onEnded={() => {
          next();
        }}
        onCanPlay={() => {
          if (playStatus) {
            play();
          }
        }}
      ></audio>
    </div>
  );
};

export default App;

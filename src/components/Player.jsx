import React from "react";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
const Player = () => {
  const {
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    track,
    time,
    previous,
    next,
    seekAudio,
    svgLoop,
    loopBox,
    loopAudio
  } = useContext(PlayerContext);

  return (
    <div className="lg:h-[15%] h-[17%] w-full flex justify-center lg:gap-5 items-center">
      <div className="w-[33%] h-full hidden lg:flex pl-7 gap-2 items-center">
        <div className="h-full flex items-center justify-center">
          <img className="h-14 w-14 rounded" src={track.image} alt="cover" />
        </div>
        <div className="flex-col text-white justify-center items-center">
          <div className="text-lg font-sans font-semibold">{track.name}</div>
          <div className="text-sm font-sans font-normal">
            <a
              className="flex items-center gap-1"
              href={track.link}
              target="_blank"
            >
              Original
              <svg
                className="fill-white h-3 w-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="h-full lg:w-auto w-full flex lg:flex-col flex-col-reverse p-3">
        <div className="lg:h-[60%] h-[80%] flex lg:justify-center item-center lg:gap-9 gap-1">
          <div className="h-full flex flex-1 lg:hidden gap-2 items-center">
            <div className="h-full flex items-center justify-center">
              <img
                className="h-14 w-14 rounded"
                src={track.image}
                alt="cover"
              />
            </div>
            <div className="flex-col text-white justify-center items-center">
              <div className="text-lg font-sans font-semibold">
                {track.name}
              </div>
              <div className="text-sm font-sans font-normal">
                <a
                  className="flex items-center gap-1"
                  href={track.link}
                  target="_blank"
                >
                  Original
                  <svg
                    className="fill-white h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <svg
            onClick={ async () => {
              await previous();
              play();
            }}
            className="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#e8eaed"
          >
            <path d="M220-240v-480h80v480h-80Zm520 0L380-480l360-240v480Zm-80-240Zm0 90v-180l-136 90 136 90Z" />
          </svg>
          {playStatus ? (
            <svg
              onClick={pause}
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#e8eaed"
            >
              <path d="M360-320h80v-320h-80v320Zm160 0h80v-320h-80v320ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
          ) : (
            <svg
              onClick={play}
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#e8eaed"
            >
              <path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
          )}
          <svg
            onClick={ async () => {
              await next();
              play();
            }}
            className="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#e8eaed"
          >
            <path d="M660-240v-480h80v480h-80Zm-440 0v-480l360 240-360 240Zm80-240Zm0 90 136-90-136-90v180Z" />
          </svg>
          <span className="flex justify-center items-center">
            <label htmlFor="loopBox">
              <input
                className="hidden"
                type="checkbox"
                name="check"
                id="loopBox"
                ref={loopBox}
                onChange={() => loopAudio()}
              />
              <svg
                ref={svgLoop}
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                width="30px"
                fill="#646464"
              >
                <path d="M460-360v-180h-60v-60h120v240h-60ZM280-80 120-240l160-160 56 58-62 62h406v-160h80v240H274l62 62-56 58Zm-80-440v-240h486l-62-62 56-58 160 160-160 160-56-58 62-62H280v160h-80Z" />
              </svg>
            </label>
          </span>
        </div>
        <div className="h-[20%] flex justify-center items-center gap-2">
          <div className="text-sm font-sans font-normal text-white h-min">
            {time.currentTime.minute2}
            {time.currentTime.minute1}:{time.currentTime.second2}
            {time.currentTime.second1}
          </div>
          <div className="w-96 bg-transparent grid grid-cols-1 grid-rows-1 h-min">
            <span className="w-full h-1 rounded-sm cursor-pointer col-span-full row-span-full bg-[#282828]">
              <span
                ref={seekBg}
                className="block h-full rounded-sm bg-white"
              ></span>
            </span>

            <input
              onClick={() => seekAudio()}
              ref={seekBar}
              className="appearance-none w-full rounded-sm h-1 col-span-full row-span-full z-1 cursor-pointer bg-transparent outline-none"
              type="range"
              min="0"
              max="100"
              step="0.001"
            />
          </div>

          <div className="text-sm font-sans font-normal text-white h-min">
            {track.duration}
          </div>
        </div>
      </div>
      <div className="h-full hidden lg:flex flex-1 pr-7 justify-end items-center gap-2">
        <svg
          className="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M792-56 671-177q-25 16-53 27.5T560-131v-82q14-5 27.5-10t25.5-12L480-368v208L280-360H120v-240h128L56-792l56-56 736 736-56 56Zm-8-232-58-58q17-31 25.5-65t8.5-70q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 53-14.5 102T784-288ZM650-422l-90-90v-130q47 22 73.5 66t26.5 96q0 15-2.5 29.5T650-422ZM480-592 376-696l104-104v208Zm-80 238v-94l-72-72H200v80h114l86 86Zm-36-130Z" />
        </svg>
        <svg
          className="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M200-360v-240h160l200-200v640L360-360H200Zm440 40v-322q45 21 72.5 65t27.5 97q0 53-27.5 96T640-320ZM480-606l-86 86H280v80h114l86 86v-252ZM380-480Z" />
        </svg>
        <svg
          className="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320ZM400-606l-86 86H200v80h114l86 86v-252ZM300-480Z" />
        </svg>
        <div className="w-24 bg-transparent grid grid-cols-1 grid-rows-1 h-min">
          <span className="w-full h-1 rounded-sm cursor-pointer col-span-full row-span-full bg-[#282828]">
            <span className="block h-full rounded-sm bg-white"></span>
          </span>

          <input
            className="appearance-none w-full rounded-sm h-1 col-span-full row-span-full z-1 cursor-pointer bg-transparent outline-none"
            type="range"
            min="0"
            max="100"
            value="0"
            step="0.001"
          />
        </div>
      </div>
    </div>
  );
};

export default Player;

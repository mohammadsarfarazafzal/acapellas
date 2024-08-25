import { useState } from "react";
import { useRef } from "react";
import { createContext } from "react";
import { audios } from "../assets/assets";
import { useEffect } from "react";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();
    const loopBox = useRef();
    const svgLoop = useRef();
    const [track, setTrack] = useState(audios[0]);
    const [playStatus, setPlayStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime: {
            second1: 0,
            second2: 0,
            minute1: 0,
            minute2: 0,
        },
    });
    const play = () => {
        audioRef.current.play();
        setPlayStatus(true);
    };
    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false);
    };
    const playWithId = async (id) => {
        setTrack(audios[id]);
        await audioRef.current.play();
        setPlayStatus(true);
    };

    const previous = async () => {
        if (track.id == 0) {
            setTrack(audios[audios.length - 1]);
            await audioRef.current.play();
            setPlayStatus(true);
        } else {
            setTrack(audios[track.id - 1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    };

    const next = async () => {
        if (track.id == audios.length - 1) {
            setTrack(audios[0]);
            await audioRef.current.play();
            setPlayStatus(true);
        } else {
            setTrack(audios[track.id + 1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    };

    const seekAudio = () => {
        audioRef.current.currentTime =
            (seekBar.current.value * audioRef.current.duration) / 100;
    };

    const loopAudio = () => {
        if (loopBox.current.checked) {
            audioRef.current.loop = true;
            svgLoop.current.style.fill = "#e8eaed";
        } else {
            audioRef.current.loop = false;
            svgLoop.current.style.fill = "#646464";
        }
    };

    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        track,
        setTrack,
        playStatus,
        setPlayStatus,
        time,
        setTime,
        play,
        pause,
        playWithId,
        previous,
        next,
        seekAudio,
        svgLoop,
        loopBox,
        loopAudio
    };

    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                seekBg.current.style.width =
                    parseFloat(
                        (audioRef.current.currentTime / audioRef.current.duration) * 100.0
                    ).toString() + "%";
                seekBar.current.value = parseFloat(
                    (audioRef.current.currentTime / audioRef.current.duration) * 100.0
                );
                setTime({
                    currentTime: {
                        second1: Math.floor(audioRef.current.currentTime % 60) % 10,
                        second2: Math.floor((audioRef.current.currentTime % 60) / 10),
                        minute1: Math.floor(audioRef.current.currentTime / 60),
                        minute2: Math.floor(audioRef.current.currentTime / 60 / 10),
                    },
                });
            }
        }, 1000);
    }, [audioRef]);

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    );
};

export default PlayerContextProvider;

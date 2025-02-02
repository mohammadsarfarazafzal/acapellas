import { useEffect, useState, useRef, createContext } from "react";
import { audios } from "../../public/assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();
    const loopBox = useRef();
    const svgLoop = useRef();
    const volRef = useRef();
    const volBg = useRef();
    const highVol = useRef();
    const midVol = useRef();
    const lowVol = useRef();
    const sideBarMob = useRef();
    const [playlist, setPlayList] = useState(audios);
    const [track, setTrack] = useState(
        playlist[Math.floor(Math.random() * (playlist.length - 0)) + 0]
    );
    const [playStatus, setPlayStatus] = useState(false);
    const [themeMode, setTheme] = useState("dark");
    const [darkStatus, setDark] = useState(true);
    const [tempVol, setTempVol] = useState(1);
    const [search, setSearch] = useState("");
    const [sideStatus, setSideStatus] = useState(false);
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

    const playWithId = (id, newPlaylist) => {
        setPlayList(newPlaylist);
        setTrack(newPlaylist[id]);
        audioRef.current.play();
        setPlayStatus(true);
    }

    const previous = async () => {
        if (track.id == 0) {
            setTrack(playlist[playlist.length - 1]);
            await audioRef.current.play();
            setPlayStatus(true);
        } else {
            setTrack(playlist[track.id - 1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    };

    const next = async () => {
        if (track.id == playlist.length - 1) {
            setTrack(playlist[0]);
            await audioRef.current.play();
            setPlayStatus(true);
        } else {
            setTrack(playlist[track.id + 1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    };

    const seekAudio = () => {
        audioRef.current.currentTime =
            (seekBar.current.value * audioRef.current.duration) / 100;
    };

    const changeVol = () => {
        audioRef.current.volume = volRef.current.value / 100;
        volBg.current.style.width =
            parseFloat(audioRef.current.volume * 100).toString() + "%";
        if (audioRef.current.volume == 0) {
            lowVol.current.style.display = "unset";
            midVol.current.style.display = "none";
            highVol.current.style.display = "none";
        } else if (audioRef.current.volume < 0.5) {
            lowVol.current.style.display = "none";
            midVol.current.style.display = "unset";
            highVol.current.style.display = "none";
        } else {
            lowVol.current.style.display = "none";
            midVol.current.style.display = "none";
            highVol.current.style.display = "unset";
        }
    };

    const mute = () => {
        audioRef.current.volume = volRef.current.value / 100;
        if (audioRef.current.volume <= 1) {
            setTempVol(audioRef.current.volume);
            audioRef.current.volume = 0;
            volRef.current.value = 0;
            volBg.current.style.width =
                parseFloat(audioRef.current.volume * 100).toString() + "%";
            highVol.current.style.display = "none";
            midVol.current.style.display = "none";
            lowVol.current.style.display = "unset";
        }
    };
    const unmute = () => {
        audioRef.current.volume = volRef.current.value / 100;
        if (audioRef.current.volume == 0) {
            audioRef.current.volume = tempVol;
            volRef.current.value = tempVol * 100;
            volBg.current.style.width =
                parseFloat(audioRef.current.volume * 100).toString() + "%";
            if (tempVol > 0.5) {
                highVol.current.style.display = "unset";
                midVol.current.style.display = "none";
                lowVol.current.style.display = "none";
            } else {
                highVol.current.style.display = "none";
                midVol.current.style.display = "unset";
                lowVol.current.style.display = "none";
            }
        }
    };

    const loopAudio = () => {
        if (loopBox.current.checked) {
            audioRef.current.loop = true;
            if (darkStatus) {
                svgLoop.current.style.fill = "#e8eaed";
            } else {
                svgLoop.current.style.fill = "#121212";
            }
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
        loopAudio,
        themeMode,
        setTheme,
        darkStatus,
        setDark,
        volRef,
        changeVol,
        volBg,
        highVol,
        midVol,
        lowVol,
        mute,
        unmute,
        search,
        setSearch,
        sideStatus,
        setSideStatus,
        sideBarMob,
        playlist,
        setPlayList,
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
            };
        }, 1000);
    }, [audioRef]);

    useEffect(() => {
        document.querySelector("html").classList.remove("dark", "light");
        document.querySelector("html").classList.add(themeMode);
        if (loopBox.current.checked) {
            if (darkStatus) {
                svgLoop.current.style.fill = "#e8eaed";
            } else {
                svgLoop.current.style.fill = "#121212";
            }
        } else {
            svgLoop.current.style.fill = "#646464";
        }
    }, [themeMode]);

    useEffect(() => {
        if (sideStatus) {
            sideBarMob.current.classList.remove(
                "hidden",
                "lg:flex",
                "w-[25%]",
                "h-full"
            );
            sideBarMob.current.classList.add(
                "flex",
                "absolute",
                "z-[20]",
                "w-[75%]",
                "h-screen"
            );
        } else {
            sideBarMob.current.classList.remove(
                "flex",
                "absolute",
                "z-[20]",
                "w-[50%]",
                "h-screen"
            );
            sideBarMob.current.classList.add(
                "hidden",
                "lg:flex",
                "w-[25%]",
                "h-full"
            );
        }
    }, [sideStatus]);

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    );
};

export default PlayerContextProvider;

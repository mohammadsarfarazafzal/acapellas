import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import { logo } from "../../public/assets/assets";

const Navbar = () => {
    const {
        setTheme,
        darkStatus,
        setDark,
        setSearch,
        sideStatus,
        setSideStatus,
    } = useContext(PlayerContext);
    return (
        <>
            <div className="w-full h-[12%] flex items-center p-3 border-b border-b-zinc-800">
                <div className="h-full lg:hidden flex gap-2 justify-center items-center">
                    <div className="h-full flex justify-center items-center cursor-pointer">
                        <img className="h-9 w-9" src={logo} alt="logo" />
                    </div>
                    <div className="h-full dark:text-white text-[#121212] text-3xl font-sans font-extrabold flex justify-center items-center cursor-pointer">
                        Acapellas
                    </div>
                </div>
                <div className="lg:flex hidden justify-center items-center gap-3">
                    <svg
                        className="cursor-pointer fill-[#121212] dark:fill-[#e8eaed]"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                    >
                        <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" />
                    </svg>
                    <svg
                        className="cursor-pointer fill-[#121212] dark:fill-[#e8eaed]"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                    >
                        <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                    </svg>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <label htmlFor="search"></label>
                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        className="text-center text-white text-base font-sans lg:w-[50%] w-[75%] h-9 bg-[#708090] dark:bg-[#282828] rounded-full flex justify-center items-center"
                        type="search"
                        id="search"
                        placeholder="Search"
                    />
                </div>
                <div className="lg:flex hidden justify-center items-center">
                    {darkStatus ? (
                        <svg
                            onClick={() => {
                                setDark(false);
                                setTheme("light");
                            }}
                            className="cursor-pointer fill-[#121212] dark:fill-[#e8eaed]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                            width="30px"
                        >
                            <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" />
                        </svg>
                    ) : (
                        <svg
                            onClick={() => {
                                setDark(true);
                                setTheme("dark");
                            }}
                            className="cursor-pointer fill-[#121212] dark:fill-[#e8eaed]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                            width="30px"
                        >
                            <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
                        </svg>
                    )}
                </div>
                <div className="flex lg:hidden justify-center items-center">
                    {sideStatus ? (
                        <svg
                        onClick={()=>{
                            setSideStatus(false);
                        }}
                            xmlns="http://www.w3.org/2000/svg"
                            className="cursor-pointer fill-[#121212] dark:fill-[#e8eaed]"
                            viewBox="0 -960 960 960"
                            width="30px"
                            fill="#e8eaed"
                        >
                            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                        </svg>
                    ) : (
                        <svg
                            onClick={()=>{
                                setSideStatus(true);
                            }}
                            className="cursor-pointer fill-[#121212] dark:fill-[#e8eaed]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                            width="30px"
                            fill="#e8eaed"
                        >
                            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                        </svg>
                    )}
                </div>
            </div>
        </>
    );
};

export default Navbar;

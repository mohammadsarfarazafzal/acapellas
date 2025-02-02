import React, { useContext, useRef } from "react";
import { logo } from "../../public/assets/assets";
import { PlayerContext } from "../context/PlayerContext";
import { Link } from "react-router-dom";
const Sidebar = () => {
    const { setDark, setTheme, darkStatus, sideBarMob } =
        useContext(PlayerContext);
    return (
        <div
            ref={sideBarMob}
            className="dark:bg-[#282828] bg-[#708090] w-[25%] h-full flex-col p-2 gap-2 text-[#121212] dark:text-white hidden lg:flex"
        >
            <div className="h-16 flex gap-2 justify-center items-center mb-3">
                <div className="h-full flex justify-center items-center cursor-pointer">
                    <img className="h-9 w-9" src={logo} alt="logo" />
                </div>
                <div className="h-full text-4xl font-sans font-extrabold flex justify-center items-center cursor-pointer">
                    Acapellas
                </div>
            </div><Link to="/">
            <div className="h-16 flex gap-2 items-center pl-7 hover:bg-[#ffffff26] rounded cursor-pointer">
                <div className="h-full flex justify-center items-center cursor-pointer">
                    <svg
                        className="h-6 w-6 fill-[#121212] dark:fill-[#e8eaed]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                    >
                        <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                    </svg>
                </div>
                <div className="h-full text-2xl font-sans font-bold flex justify-center items-center cursor-pointer">
                Home
                </div>
            </div></Link>
            <Link to="/about">
            <div className="h-16 flex gap-2 items-center pl-7 hover:bg-[#ffffff26] rounded cursor-pointer">
                <div className="h-full flex justify-center items-center cursor-pointer">
                    <svg
                        className="h-6 w-6 fill-[#121212] dark:fill-[#e8eaed]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                    >
                        <path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3l0-84.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5l0 21.5c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-26.8C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112l32 0c24 0 46.2 7.5 64.4 20.3zM448 416l0-21.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176l32 0c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2l0 26.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3l0-84.7c-10 11.3-16 26.1-16 42.3zm144-42.3l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2l0 42.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-42.8c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112l32 0c61.9 0 112 50.1 112 112z" />
                    </svg>
                </div>
                <div className="h-full text-2xl font-sans font-bold flex justify-center items-center cursor-pointer">
                    About Us
                </div>
            </div></Link>
            <div className="h-16 flex gap-2 items-center pl-7 hover:bg-[#ffffff26] rounded cursor-pointer">
                <div className="h-full flex justify-center items-center cursor-pointer">
                    <svg
                        className="h-6 w-6 fill-[#121212] dark:fill-[#e8eaed]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                    >
                        <path d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2s0 0 0 0s0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.2-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9c0 0 0 0 0 0s0 0 0 0l-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z" />
                    </svg>
                </div>
                <div className="h-full text-2xl font-sans font-bold flex justify-center items-center cursor-pointer">
                    Feedback
                </div>
            </div>
            <div className="lg:hidden flex items-center h-16 gap-2 pl-7 hover:bg-[#ffffff26] rounded cursor-pointer">
                <div className="h-full flex justify-center items-center cursor-pointer">
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
                <div className="h-full w-full text-2xl font-sans font-bold flex items-center cursor-pointer">
                    {darkStatus ? (
                        <div
                        className="h-full w-full flex items-center"
                            onClick={() => {
                                setDark(false);
                                setTheme("light");
                            }}
                        >
                            Light Mode
                        </div>
                    ) : (
                        <div
                        className="h-full w-full flex items-center"
                            onClick={() => {
                                setDark(true);
                                setTheme("dark");
                            }}
                        >
                            Dark Mode
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

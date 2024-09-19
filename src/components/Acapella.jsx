import React from 'react'
import { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const Acapella = ({ name, duration, image, id, currentPlaylist }) => {
    const { playWithId } = useContext(PlayerContext);
    return (
        <div onClick={() => {
            playWithId(id, currentPlaylist)
        }} className='min-w-[180px] max-w-[180px] p-2 rounded cursor-pointer hover:bg-[#00000026] dark:hover:bg-[#ffffff26]'>
            <img className='rounded' src={image} alt="" />
            <p className='font-bold mt-2 text-[#121212] dark:text-white'>{name}</p>
            <p className='font-normal text-[#646464] dark:text-slate-200 mt-2 text-xs'>{duration}</p>
        </div>
    )
}

export default Acapella
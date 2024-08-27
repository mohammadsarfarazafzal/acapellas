import React from 'react'
import { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const Acapella = ({ name, duration, image, id }) => {
    const {playWithId, play} = useContext(PlayerContext);
    return (
        <div onClick={async ()=> {
            await playWithId(id);
            play();
        }} className='min-w-[180px] max-w-[180px] p-2 rounded h-fit cursor-pointer hover:bg-[#ffffff26]'>
            <img className='rounded' src={image} alt="" />
                <p className='font-bold mt-2 text-[#121212] dark:text-white'>{name}</p>
                <p className='font-normal text-[#646464] dark:text-slate-200 mt-2 text-xs'>{duration}</p>
        </div>
    )
}

export default Acapella
import React from 'react'
import { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const Acapella = ({ name, duration, image, id }) => {
    const {playWithId, play} = useContext(PlayerContext);
    return (
        <div onClick={async ()=> {
            await playWithId(id);
            play();
        }} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
            <img className='rounded' src={import.meta.env.BASE_URL + image} alt="" />
                <p className='font-bold mt-2 text-white'>{name}</p>
                <p className='font-normal text-slate-200 mt-2 text-xs'>{duration}</p>
        </div>
    )
}

export default Acapella
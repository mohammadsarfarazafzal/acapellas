import React from 'react';
import { audios } from '../../public/assets/assets';
import Acapella from './Acapella';
import { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';

const DisplayHome = () => {
    const {search} = useContext(PlayerContext)
    return (
        <>
            <div className='p-3'>
                <h1 className='text-2xl font-bold mb-3 text-[#121212] dark:text-white'>Top Picks</h1>
                <div className='flex items-center gap-1'>
                    <svg onClick={()=>{
                        document.getElementById('topPicks').scrollLeft -= 350
                    }} className='cursor-pointer dark:fill-[#e8eaed] fill-[#121212]' xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" ><path d="m480-320 56-56-64-64h168v-80H472l64-64-56-56-160 160 160 160Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                    <div className='flex overflow-auto flex-1 scroll-smooth' id='topPicks'>
                        {audios.filter((item)=>{
                            return search.toLowerCase() === ''? item : item.name.toLowerCase().includes(search.toLowerCase());
                        }).map((item, index) => (<Acapella key={index} name={item.name} duration={item.duration} image={item.image} id={item.id}/>))}
                    </div>
                    <svg onClick={()=>{
                        document.getElementById('topPicks').scrollLeft += 350
                    }} className='cursor-pointer dark:fill-[#e8eaed] fill-[#121212]' xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" ><path d="m480-320 160-160-160-160-56 56 64 64H320v80h168l-64 64 56 56Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                </div>
            </div>
        </>
    )
}

export default DisplayHome
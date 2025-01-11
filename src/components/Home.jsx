import React from 'react';
import { audios, romance, feelLow } from '../../public/assets/assets';
import Acapella from './Acapella';
import { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';

const Home = () => {
    const { search } = useContext(PlayerContext)
    return (
        <>
            <div className='h-screen'>
                <div className='p-3'>
                    <h1 className='text-2xl font-bold mb-3 pl-1 text-[#121212] dark:text-white'>All Items</h1>
                    <div className='flex items-center gap-1'>
                        <svg onClick={() => {
                            document.getElementById('allItems').scrollLeft -= 350
                        }} className='cursor-pointer dark:fill-[#e8eaed] fill-[#121212]' xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" ><path d="m480-320 56-56-64-64h168v-80H472l64-64-56-56-160 160 160 160Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                        <div className='flex overflow-auto flex-1 scroll-smooth' id='allItems'>
                            {audios.filter((item) => {
                                return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search.toLowerCase());
                            }).map((item, index) => (<Acapella key={index} name={item.name} duration={item.duration} image={item.image} id={item.id} currentPlaylist={audios} />))}
                        </div>
                        <svg onClick={() => {
                            document.getElementById('allItems').scrollLeft += 350
                        }} className='cursor-pointer dark:fill-[#e8eaed] fill-[#121212]' xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" ><path d="m480-320 160-160-160-160-56 56 64 64H320v80h168l-64 64 56 56Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                    </div>
                </div>
                <div className='p-3'>
                    <h1 className='text-2xl pl-1 font-bold mb-3 text-[#121212] dark:text-white'>Romance</h1>
                    <div className='flex items-center gap-1'>
                        <svg onClick={() => {
                            document.getElementById('romance').scrollLeft -= 350
                        }} className='cursor-pointer dark:fill-[#e8eaed] fill-[#121212]' xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" ><path d="m480-320 56-56-64-64h168v-80H472l64-64-56-56-160 160 160 160Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                        <div className='flex overflow-auto flex-1 scroll-smooth' id='romance'>
                            {romance.map((item, index) => (<Acapella key={index} name={item.name} duration={item.duration} image={item.image} id={item.id} currentPlaylist={romance} />))}
                        </div>
                        <svg onClick={() => {
                            document.getElementById('romance').scrollLeft += 350
                        }} className='cursor-pointer dark:fill-[#e8eaed] fill-[#121212]' xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" ><path d="m480-320 160-160-160-160-56 56 64 64H320v80h168l-64 64 56 56Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                    </div>
                </div>

                <div className='p-3'>
                    <h1 className='text-2xl pl-1 font-bold mb-3 text-[#121212] dark:text-white'>Feel Low</h1>
                    <div className='flex items-center gap-1'>
                        <svg onClick={() => {
                            document.getElementById('feelLow').scrollLeft -= 350
                        }} className='cursor-pointer dark:fill-[#e8eaed] fill-[#121212]' xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" ><path d="m480-320 56-56-64-64h168v-80H472l64-64-56-56-160 160 160 160Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                        <div className='flex overflow-auto flex-1 scroll-smooth' id='feelLow'>
                            {feelLow.map((item, index) => (<Acapella key={index} name={item.name} duration={item.duration} image={item.image} id={item.id} currentPlaylist={feelLow} />))}
                        </div>
                        <svg onClick={() => {
                            document.getElementById('feelLow').scrollLeft += 350
                        }} className='cursor-pointer dark:fill-[#e8eaed] fill-[#121212]' xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" ><path d="m480-320 160-160-160-160-56 56 64 64H320v80h168l-64 64 56 56Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home
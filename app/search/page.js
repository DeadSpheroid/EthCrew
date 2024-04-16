"use client"
import { useState } from 'react';

import Link from 'next/link';

function Search() {

    const [pickup, setPickup] = useState('');
    const [dropoff, setDropoff] = useState('');

    return (
        <div className=' bg-gray-200 h-screen'>
            <div className='bg-white px-4'>
                <Link href='/' >
                <img className='h-12 cursor-pointer' src='https://img.icons8.com/ios-filled/50/000000/left.png' />
                </Link>
            </div>
            <div className='bg-white flex items-center px-4 mb-2'r>

                <div className='w-10 flex flex-col mr-2 items-center'>
                    <img className='h-2.5' src='https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png' />
                    <img className='h-10' src='https://img.icons8.com/ios/50/9CA3AF/vertical-line.png' />
                    <imh className='h-3' src='https://img.icons8.com/windows/50/000000/square-full.png' />
                </div>

                <div className='flex flex-col flex-1'>

                    <input className='h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none ml-3'
                        placeholder='Enter pickup location'
                        value={pickup}
                        onChange={e => setPickup(e.target.value)}
                    />
                    <input className='h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none ml-3'
                        placeholder='Where to?'
                        value={dropoff}
                        onChange={e => setDropoff(e.target.value)}
                    />

                </div>
                <img className='w-10 h-10 bg-gray-200 rounded-full ml-3' src='https://img.icons8.com/ios/50/000000/plus-math.png' />
            </div>

            <div className='flex items-center bg-white px-4 py-2'>
                <img className='bg-gray-400 w-10 h-10 p-2 rounded-full mr-2' src='https://img.icons8.com/ios-filled/50/ffffff/star--v1.png' />
                Saved Images
            </div>

            <Link href={{
                pathname: '/result',
                query: {
                    pickup: pickup,
                    dropoff: dropoff
                }
            }}>
                <div className='bg-black text-white text-center mt-2 mx-4 px-4 py-3 text-2xl cursor-pointer'>
                    <div className='text-white'>Confirm Locations</div>
                </div>
            </Link>

        </div>
    )
};

export default Search;


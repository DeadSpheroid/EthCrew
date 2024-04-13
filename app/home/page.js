"use client"
import { useEffect, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Map from '@/components/Map';
import Link from 'next/link';
// import { auth } from '../firebase';
// import { onAuthStateChanged, signOut } from 'firebase/auth';
// import { useRouter } from 'next/router';

export default function Home() {

//   const [user, setUser] = useState(null);
//   const router = useRouter();

//   useEffect(() => {
//     return onAuthStateChanged(auth, user => {
//       if (user) {
//         setUser({
//           name: user.displayName,
//           photoUrl: user.photoURL,
//         });
//       } else {
//         setUser(null);
//         router.push('/login');
//       }
//     })
//   }, []);

  return (
    <div className='flex flex-col h-screen'>
      <Map />
      <div className='flex-1 p-4' >
        <div className='flex justify-between items-center'>

          <img className='h-28' src='https://i.ibb.co/ZMhy8ws/uber-logo.png' />



        </div>
        <div className='flex'>

            <div className='flex flex-col flex-1 bg-gray-200 m-1 h-32 items-center justify-center rounded-lg transform hover:scale-105 transition text-xl'>
          <Link href='/search' >
              <img className='h-3/5' src='https://i.ibb.co/cyvcpfF/uberx.png' />
              Ride
          </Link>
            </div>

          <div className='flex flex-col flex-1 bg-gray-200 m-1 h-32 items-center justify-center rounded-lg transform hover:scale-105 transition text-xl'>
            <img className='h-3/5' src='https://i.ibb.co/n776JLm/bike.png' />
            Wheels
          </div>

          <div className='flex flex-col flex-1 bg-gray-200 m-1 h-32 items-center justify-center rounded-lg transform hover:scale-105 transition text-xl'>
            <img className='h-3/5' src='https://i.ibb.co/5RjchBg/uberschedule.png' />
            Reserve
          </div>
          
        </div>

        <div className='h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8'>
          Where to
        </div>

      </div>
    </div>
  )
};


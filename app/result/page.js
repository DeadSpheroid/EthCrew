"use client"
import { useEffect, useState } from 'react';
import Map from '@/components/Map';
import { useRouter } from 'next/navigation';
import RideSelector from '@/components/Rides';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function Result() {


    const searchParams = useSearchParams();
    const pickup = searchParams.get('pickup');
    const dropoff = searchParams.get('dropoff');


    const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
    const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);

    const getPickupCoordinates = (pickup) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + 
            new URLSearchParams({
                access_token: 'pk.eyJ1IjoiZGV2bGlucm9jaGEiLCJhIjoiY2t2bG82eTk4NXFrcDJvcXBsemZzdnJoYSJ9.aq3RAvhuRww7R_7q-giWpA',
                limit: 1,
            })
        )
        .then(response => response.json())
        .then(data => {
            setPickupCoordinates(data.features[0].center);
        });
    };

    const getDropoffCoordinates = (dropoff) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
            new URLSearchParams({
                access_token: 'pk.eyJ1IjoiZGV2bGlucm9jaGEiLCJhIjoiY2t2bG82eTk4NXFrcDJvcXBsemZzdnJoYSJ9.aq3RAvhuRww7R_7q-giWpA',
                limit: 1,
            })
        )
        .then(response => response.json())
        .then(data => {
            setDropoffCoordinates(data.features[0].center);
        });
    };

    useEffect(() => {
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
    }, [pickup, dropoff]);

    return (
        <div className='flex h-screen flex-col'>
            <div className='absolute rounded-full top-4 left-4 z-10 bg-white shadow-md cursor-pointer'>
                <Link href='/search' >
                    <img className='h-full object-contain' src='https://img.icons8.com/ios-filled/50/000000/left.png' />
                </Link>
            </div>

            <Map
            pickupCoordinates={pickupCoordinates}
            dropoffCoordinates={dropoffCoordinates}
            />
        
            <div className='flex flex-col flex-1 h-1/2'>
                <RideSelector
                    pickupCoordinates={pickupCoordinates}
                    dropoffCoordinates={dropoffCoordinates}
                />

                <div className='border-t-2'>
                    <div className='bg-black text-white my-4 mx-4 py-4 text-center text-xl'>
                        Confirm UberX
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Result;

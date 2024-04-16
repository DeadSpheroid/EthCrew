import { useEffect, useState } from 'react';

import { carList } from '@/data/carList';

function RideSelector({pickupCoordinates, dropoffCoordinates}) {

    const [rideDuration, setRideDuration] = useState(0);

    useEffect(() => {
        fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]}, ${pickupCoordinates[1]};${dropoffCoordinates[0]}, ${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiZGV2bGlucm9jaGEiLCJhIjoiY2t2bG82eTk4NXFrcDJvcXBsemZzdnJoYSJ9.aq3RAvhuRww7R_7q-giWpA`)
            .then(res => res.json())
            .then(data => {
                if (data.routes) {
                    setRideDuration(data.routes[0].duration / 100);
                };
            })
    }, [pickupCoordinates, dropoffCoordinates]);

    return (
        <div className='flex-1 overflow-y-scroll flex flex-col'>
            <div className='text-gray-500 text-center text-xs py-2 border-b'>Choose a ride, or swipe up for more</div>
            <div className='overflow-y-scroll'>
                {carList.map((car, index) => (
                    <div className='flex p-4 items-center' key={index} >

                        <img className=' h-14 mr-4' src={car.imgUrl} />

                        <div className='flex-1'>

                            <div className='font-medium'>{car.service}</div>
                            <div className='text-xs text-blue-500'>5 min away</div>

                        </div>
                    
                        <div className='text-sm'>${(rideDuration * car.multiplier).toFixed(2)}</div>
                    </div>
                ))}

            </div>
        </div>
    )
};

export default RideSelector

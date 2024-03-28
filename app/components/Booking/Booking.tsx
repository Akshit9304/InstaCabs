"use client";
import React, { useState, useEffect } from 'react';
import Address from './Address';
import Cars from './Cars';



function Booking() {

    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [result, setResult] = useState('');

    const locations = ['A', 'B', 'C', 'D', 'E', 'F'];

    const handleBook = async () => {
        try {
            const response = await fetch(`http://localhost:3001/api/shortest-path?start=${start}&end=${end}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setResult(`Shortest path: ${data.path.join(' -> ')}, Total time: ${data.time} min`);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    
    

    const [screenHeight, setScreenHeight] = useState(0);

    useEffect(() => {
        const updateScreenHeight = () => {
            setScreenHeight(window.innerHeight * 0.72);
        };
        updateScreenHeight(); // Initial call to set the height

        window.addEventListener('resize', updateScreenHeight); // Listen for resize events

        return () => {
            window.removeEventListener('resize', updateScreenHeight); // Clean up the event listener
        };
    }, []);

    return (
        <div className='p-5'>
            <h2 className='text-[20px] font-semibold'>Booking</h2>
            <div className='border-[1px] p-5 rounded-md' style={{ height: `${screenHeight}px` }}>
                <div>
                    <label htmlFor="startSelect">Select start location:</label>
                    <select id="startSelect" value={start} onChange={(e) => setStart(e.target.value)}>
                        <option value="">Select...</option>
                        {locations.map((location) => (
                            <option key={location} value={location}>{location}</option>
                        ))}
                    </select>
                    <br />
                    <label htmlFor="endSelect">Select end location:</label>
                    <select id="endSelect" value={end} onChange={(e) => setEnd(e.target.value)}>
                        <option value="">Select...</option>
                        {locations.map((location) => (
                            <option key={location} value={location}>{location}</option>
                        ))}
                    </select>
                    <br />
                    {/* <button onClick={handleBook}>Book</button>
      <p>{result}</p> */}
                </div>
                <Cars />
                <button className='w-full
                bg-yellow-400
                p-1 rounded-md
                mt-4' onClick={handleBook}>Book</button>
                <h2>{result}</h2>
            </div>
        </div>
    );
}

export default Booking;

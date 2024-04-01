"use client";
import CArlist from '@/app/data/CArlist';
import emailjs from '@emailjs/browser';
import React, { useState, useEffect } from 'react';
import Address from './Address';
import Cars from './Cars';
import carslist from '../../data/CArlist';


function Booking() {

    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [result, setResult] = useState('');
    const [car, setCar] = useState('')

    const handlerFunction = (data: any) => {
        console.log(data)
        setCar(data)
    }

    const locations = ['A', 'B', 'C', 'D', 'E', 'F'];

    const serviceId = 'service_nsyb4tj'
    const templateId = 'template_qauc09m'
    const publicKey = 'QJx7vEaPFyj1AqBSw'
    

    const handleBook = async () => {
        try {
            console.log('Selected Start:', start);
            console.log('Selected End:', end);
            const response = await fetch(`http://localhost:3001/api/shortest-path?start=${start}&end=${end}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            // console.log(data)
            // console.log(car)
            const mess = `Shortest path: ${data.path.join(' -> ')}, Total time: ${data.time} min, Total Cost: ${data.time*carslist[car].charges}, Cab Type: ${carslist[car].name}` 
            setResult(mess);
            const templateParams = {
                to_name : name,
                to_email: email,
                message: mess
            }

            emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log("Email Sent Successfully...", response)
                setName('')
                setEmail('')
            }).catch((error) => {
                console.log('Error Sending Email: ', error)
            })
            
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
                    <label htmlFor="enterName">Enter Name: </label>
                    <input id="enterName" className="border-[1px]" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <br/>
                    <br/>
                    <label htmlFor="enterEmail">Enter Email:    </label>
                    <input id="enterEmail" className="border-[1px]" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <br/>
                    <br/>
                    <label htmlFor="startSelect">Select start location:</label>
                    <select id="startSelect" value={start} onChange={(e) => setStart(e.target.value)}>
                        <option value="">Select...</option>
                        {locations.map((location) => (
                            <option key={location} value={location}>{location}</option>
                        ))}
                    </select>
                    <br />
                    <br/>
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
                <Cars HandlerFunction={handlerFunction}/>
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

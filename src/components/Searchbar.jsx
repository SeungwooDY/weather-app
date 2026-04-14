import { useState } from 'react';

export default function SearchBar({ location, setLocation, getCurrentLocation, handleFetchWeather }) {

    return (
        <>
            <div class="flex justify-center">
                <input class="px-4 py-2 border border-gray-300 rounded-md m-2"
                    type="text" 
                    placeholder="Enter a location" 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow cursor-pointer m-2" onClick={getCurrentLocation}>Use current location</button>
            </div>
            <br />
            <div>
                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded cursor-pointer m-2" onClick={handleFetchWeather}>Get Weather</button>
            </div>
        </>
    )
}
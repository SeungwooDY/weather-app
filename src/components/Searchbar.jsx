import { useState } from 'react';

export default function SearchBar({ location, setLocation, getCurrentLocation, handleFetchWeather }) {

    return (
        <>
            <div>
                <input 
                    type="text" 
                    placeholder="Enter a location" 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <button onClick={getCurrentLocation}>Get current location</button>
            </div>
            <br />
            <div>
                <button onClick={handleFetchWeather}>Get Weather</button>
            </div>
        </>
    )
}
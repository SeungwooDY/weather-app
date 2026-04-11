import { useState, useEffect } from 'react';
import SearchBar from './Searchbar';
import Display from './Display';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export default function WeatherApp() {
    const [location, setLocation] = useState("");
    const [weather, setWeather] = useState(null);
    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);

    function getCurrentLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }
    
    function success(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setLat(lat);
        setLon(lon);
        fetchWeather(lat, lon);
    }
    
    function error() {
        alert("Sorry, no position available.");
    }

    const fetchGeoCode = async (location) => {
        console.log(`fetchGeoCode called with location ${location}`);
        const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${API_KEY}`);
        const geoData = await response.json();
        console.log(geoData);

        const result = geoData?.[0];
        if (!result) return null;


        setLat(result.lat);
        setLon(result.lon);
        return result;
    }

    const fetchWeather = async (lat, lon) => {
        console.log("fetchWeather called");
        const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily&appid=${API_KEY}`)
        const weatherData = await response.json();
        console.log(weatherData.current);
        setWeather(weatherData.current);
    }

    const handleFetchWeather = async () => {
        console.log("button clicked");
        const geoCode = await fetchGeoCode(location);

        if (!geoCode) return;

        const weatherData = await fetchWeather(geoCode.lat, geoCode.lon);
    }

    return (
        <>
            <SearchBar 
                location={location}
                setLocation={setLocation}
                getCurrentLocation={getCurrentLocation}
                handleFetchWeather={handleFetchWeather}
            />
            <br />
            <Display lat={lat} lon={lon} weather={weather}/>
        </>
    )
}
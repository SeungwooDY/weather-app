import { useState, useEffect } from 'react';
import SearchBar from './Searchbar';
import Display from './Display';
import ToggleUnits from './ToggleUnits';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export default function WeatherApp() {
    const [location, setLocation] = useState("");
    const [currentWeather, setCurrentWeather] = useState(null);
    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);
    const [units, setUnits] = useState("imperial"); // imperial by default

    useEffect(() => {
        const updateWeather = async () => {
            if (!lat || !lon) {
                return;
            }
            const data = await fetchWeather(lat, lon);
            setCurrentWeather(data);
        }
        updateWeather();
    },[units, lat, lon])

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
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`)
        const weatherData = await response.json();

        console.log(weatherData);
        return weatherData;
    }

    const handleFetchWeather = async () => {
        console.log("button clicked");
        const geoCode = await fetchGeoCode(location);

        if (!geoCode) return;

        const weatherData = await fetchWeather(geoCode.lat, geoCode.lon);
        setCurrentWeather(weatherData);
    }

    function changeUnits() {
        if (units === "imperial") {
            setUnits("metric");
        } else {
            setUnits("imperial");
        }
    }

    return (
        <>
        <div class="flex items-center justify-center bg-amber-100">
            <h1 class="mr-10 ml-10 ">Weather</h1>
                <SearchBar 
                    location={location}
                    setLocation={setLocation}
                    getCurrentLocation={getCurrentLocation}
                    handleFetchWeather={handleFetchWeather}
                />
        </div>
        <br />
        <div class="flex items-center justify-center">
        <Display lat={lat} lon={lon} currentWeather={currentWeather} units={units}/>
        </div>
            
            <br />
            <ToggleUnits units={units} changeUnits={changeUnits}/>
        </>
    )
}
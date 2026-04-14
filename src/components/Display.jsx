export default function Display({ lat, lon, currentWeather, units }) {
    return (
        <>
            <div className='display'>
                <p>{units === "imperial" ? `Current Temp: ${currentWeather?.main?.temp} F` : `Current Temp: ${currentWeather?.main?.temp} C`}</p>
                <p>{units === "imperial" ? `Feels Like: ${currentWeather?.main?.feels_like} F` : `Feels Like: ${currentWeather?.main?.temp} C`}</p>
                <p>Humidity: {currentWeather?.main?.humidity}%</p>
            </div>
            <br />
            <div>
                <p>Latitude: {lat}</p>
                <p>Longitude: {lon}</p>
            </div>
        </>
    )
}
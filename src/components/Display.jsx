export default function Display({ lat, lon, currentWeather, units }) {
    return (
        <>
            <div className='display'>
                <p>{units === "imperial" ? `Current Temp: ${currentWeather?.main?.temp} F` : `Current Temp: ${currentWeather?.main?.temp} C`}</p>
                <img className="icon-display"
                    src={`https://openweathermap.org/img/wn/${currentWeather?.weather?.[0]?.icon}@2x.png`}
                    alt={currentWeather?.weather?.[0]?.description}
                />
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
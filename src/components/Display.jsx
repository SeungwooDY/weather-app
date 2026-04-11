export default function Display({ lat, lon, currentWeather, hourlyForecast }) {
    return (
        <>
            <div className='display'>
                Current Weather: {currentWeather}
            </div>
            <div className='display'>
                Hourly Forecast for tomorrow: {hourlyForecast}
            </div>
            <br />
            <div>
                <p>Latitude: {lat}</p>
                <p>Longitude: {lon}</p>
            </div>
        </>
    )
}
export default function Display({ lat, lon, currentWeather }) {
    return (
        <>
            <div className='display'>
                <p>Current Temp: {currentWeather?.main?.temp}</p>
                <p>Feels Like: {currentWeather?.main?.feels_like}</p>
                <p>Humidity: {currentWeather?.main?.humidity}</p>
            </div>
            <br />
            <div>
                <p>Latitude: {lat}</p>
                <p>Longitude: {lon}</p>
            </div>
        </>
    )
}
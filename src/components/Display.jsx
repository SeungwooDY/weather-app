export default function Display({ lat, lon, currentWeather, units }) {
    return (
        <>
            <div class="border-4 border-amber-500 rounded-2xl py-2 px-4">
                <p class="font-semibold">{units === "imperial" ? `Current Temp: ${currentWeather?.main?.temp} F` : `Current Temp: ${currentWeather?.main?.temp} C`}</p>
                <img class="icon-display"
                    src={`https://openweathermap.org/img/wn/${currentWeather?.weather?.[0]?.icon}@2x.png`}
                    alt={currentWeather?.weather?.[0]?.description}
                />
                <p class="font-semibold">{units === "imperial" ? `Feels Like: ${currentWeather?.main?.feels_like} F` : `Feels Like: ${currentWeather?.main?.temp} C`}</p>
                <p class="font-semibold">Humidity: {currentWeather?.main?.humidity}%</p>
            </div>
            <br />
            <div class="border-4 border-blue-300 rounded-2xl py-2 px-4 m-4">
                <p>Latitude: {lat}</p>
                <p>Longitude: {lon}</p>
            </div>
        </>
    )
}
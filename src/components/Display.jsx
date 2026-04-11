export default function Display({ lat, lon, weather }) {
    return (
        <>
            <div className='display'>
                {weather}
            </div>
            <br />
            <div>
                <p>Latitude: {lat}</p>
                <p>Longitude: {lon}</p>
            </div>
        </>
    )
}
export default function ToggleUnits({ units, changeUnits }) {
    return (
        <>
            <button onClick={changeUnits}>
                {units === "imperial" ? 'View Metric' : 'View Imperial'}
            </button>
        </>
    )
}
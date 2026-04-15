export default function ToggleUnits({ units, changeUnits }) {
    return (
        <>
            <div class="flex justify-center">
                <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow cursor-pointer" onClick={changeUnits}>
                    {units === "imperial" ? 'View Metric' : 'View Imperial'}
                </button>
            </div>
        </>
    )
}
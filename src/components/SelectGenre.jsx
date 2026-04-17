export default function SelectGenre({ setSection }) {
    const genres = ["home", "arts", "automobiles", "books/review", "business", "fashion", 
        "food", "health", "insider", "magazine", "movies", "nyregion", 
        "obituaries", "opinion", "politics", "realestate", "science", 
        "sports", "sundayreview", "technology", "theater", "t-magazine", 
        "travel", "upshot", "us", "world"];

    return (
        <>
            <select onChange={(e) => setSection(e.target.value)}>
                {genres.map(genre => (
                    <option
                        key={genre} value={genre}>{genre}
                    </option>
                ))}
            </select>
        </>
    )
}
import SelectGenre from "./SelectGenre";
import { useState, useEffect } from 'react';
import DisplayStories from "./DisplayStories";

const API_KEY = import.meta.env.VITE_NYT_API_KEY;

export default function TopStories() {
    const [section, setSection] = useState("home"); // set default to home
    const [articles, setArticles] = useState([]);
    const [limit, setLimit] = useState(5);

    useEffect(() => {
        const updateArticles = async () => {
            const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${API_KEY}`);
            const data = await response.json();

            console.log(data);
            setArticles(data.results);
        }
        updateArticles();
    },[section])

    return (
        <>
            {articles.slice(0, limit).map(article => (
                <DisplayStories key={article.url} article={article}/>
            ))}
            <SelectGenre setSection={setSection}/>
        </>
    )
}
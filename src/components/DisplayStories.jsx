export default function DisplayStories({ article }) {
    return (
        <>
            <div class="flex border-4 border-black rounded-2xl py-2 px-4 w-50 h-50">
                {article.title}
                <a href={article.url}>Click Here</a>
            </div>
        </>
    )
}
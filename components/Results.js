import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

function Results({ results }) {
    return (
        <div className="px-0 m-0 sm:m-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
            {results.map(result => (
                <Thumbnail key={result.id} result={result}/>
            ))}
        </div>
    )
}

export default Results

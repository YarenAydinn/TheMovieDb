import { useState } from 'react'
import { searchCredits, searchMovie } from '../services'

function SearchButtonCoppy() {
    const [movieResult, setMovieResult] = useState([])
    const [creditResult, setCreditResult] = useState([])
    
    const handleSearch = async (query) => {
        if (query.length > 2) {
            setMovieResult(await searchMovie(query))
            setCreditResult(await searchCredits(query))
        }
    }

    return (
        <>
            <input type="text" placeholder="Search Movie and People" onKeyUp={(e) => handleSearch(e.target.value)} />
            <ul>
                {
                    movieResult.map((movie, idx) => (
                        <li key={idx}>{movie.title}</li>
                    ))
                }
            </ul>
            <ul>
                {
                    creditResult.map((credit, idx) => (
                        <li key={idx}>{credit.name}</li>
                    ))
                }
            </ul>
        </>
    )
}
export default SearchButtonCoppy
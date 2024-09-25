import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { fetchMovies } from '../services';


function MovieList({setSearchButtonBackdrop}) {
    const navigate = useNavigate();
    const [movies, listMovies] = useState([])
    
    const sendBackdropRandom= ()=>{
        console.log(movies.length);
        if (movies.length > 0) {
            const randomBack = movies[Math.floor(Math.random() * movies.length)]
            setSearchButtonBackdrop(randomBack)
        }
    }

    const fetchMovie = async () => {
        listMovies(await fetchMovies())
    }

    useEffect(() => {
        fetchMovie()
    }, [])
    
    useEffect(() => {
        sendBackdropRandom()
    }, [movies])

    const handleClick = (id) => navigate('/movie/' + id)

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: "10px", margin: "10px", padding: "10px" }}>
                {(
                    movies.map((movie, idx) => {
                        return <li key={idx} onClick={() => handleClick(movie.id)} style={{ maxWidth: "350px", padding:"10px"}} >
                            <img src={'https://image.tmdb.org/t/p/w342/' + movie.poster_path} />
                            <h2 style={{textAlign:"center",padding:"10px"}}>{movie.title}</h2>
                        </li>
                    })
                )}
            </ul>
           
        </div>
    )
}

export default MovieList

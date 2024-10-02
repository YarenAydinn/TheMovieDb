
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { fetchMovies } from '../services';



function MovieList({setSearchButtonBackdrop}) {
    const navigate = useNavigate();
    
    const [movies, listMovies] = useState([])
    const [spage, setSpage] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    
    const sendBackdropRandom= ()=>{
        console.log(movies.length);
        if (movies.length > 0) {
            const randomBack = movies[Math.floor(Math.random() * movies.length)]
            setSearchButtonBackdrop(randomBack)
        }
    }

    const fetchMovie = async () => {
        const {page,results} = await fetchMovies(currentPage)
        listMovies((current)=>[...current,...results])
        setSpage(page)
    }
    useEffect(() => {
        fetchMovie()
    }, [currentPage])
    
    useEffect(() => {
        sendBackdropRandom()
    }, [movies])

    const handleClick = (id) => navigate('/movie/' + id)

    useEffect(() => {
        const handleScroll = () => {
            console.log('offsetHeight',document.documentElement.offsetHeight);
            console.log('innerHeight',window.innerHeight);
            console.log('scrollTop',document.documentElement.scrollTop);
            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                setCurrentPage((spage) => spage + 1);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px",flexDirection: "column" }}>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: "10px", margin: "10px", padding: "10px" }}>
                {(
                    movies.map((movie, idx) => {
                        return <li key={idx} onClick={() => handleClick(movie.id)} className='max-w-48 cursor-pointer' >
                            <img src={'https://image.tmdb.org/t/p/w342/' + movie.poster_path} />
                            <h2 style={{textAlign:"center",padding:"10px"}}>{movie.title}</h2>
                        </li>
                    })
                )}
            </ul>
           {/* <button onClick={handleLoadMore}>Load More</button> */}
        </div>
    )
}

export default MovieList

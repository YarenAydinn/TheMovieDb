import { useEffect, useState } from 'react'
import { searchCredits, searchMovie, fetchMovies } from '../services'
import { useNavigate } from 'react-router-dom'
import '../../src/index.css'

function SearchButton({ randomMovie }) {
    const navigate = useNavigate();
    const [searchVal, setSearchVal] = useState("")
    const [movieResult, setMovieResult] = useState([])
    const [creditResult, setCreditResult] = useState([])
    const [searchBack, setSearchBack] = useState([])
    const [fullPathBack, setFullPath] = useState("")
    const [resultClassName,setResultClassName]=useState('')


    const handleChange=(e)=>{
        if(e.target.value.length > 2){
            setSearchVal(e.target.value)
            setResultClassName('searchResult')
        }else{
            setResultClassName('searchResult hide')
        }
    }
    useEffect(() => {
        Promise.all([searchMovie(searchVal), searchCredits(searchVal)])
            .then(([mResult, cResult]) => {
                setMovieResult(mResult)
                setCreditResult(cResult)
            })
            .catch(err => console.log(err))

    }, [searchVal])

    const handleMovieClick = (id) => navigate('/movie/' + id)
    const handleCreditClick = (id) => navigate('/person/' + id)

    return (
        <>
            <div className='searchbarBack' style={{ backgroundImage: `url(${randomMovie?.backdrop_path ? ('https://image.tmdb.org/t/p/original/' + randomMovie.backdrop_path) : ''})`, width: "100%", height: "400px", backgroundSize: "cover", backgroundPosition: "top-center", backgroundColor: "rgba(0, 0, 0, 0.5)", backgroundBlendMode: "darken" }}>

                <input type="text" placeholder="Search Movie and People" onChange={handleChange} className='searchBar' />
                <div className={resultClassName}>
                    <ul >
                        {
                            movieResult.map((movie) => (
                                <li key={movie.id} onClick={() => handleMovieClick(movie.id)}>
                                    <img src={movie.poster_path ? ('https://image.tmdb.org/t/p/w92/' + movie.poster_path) : ''} />
                                    {movie.title}</li>
                            ))
                        }
                    </ul>
                    <ul >
                        {
                            creditResult.map((credit) => (
                                <li key={credit.id} onClick={() => handleCreditClick(credit.id)}>
                                    <img src={credit.profile_path ? ('https://image.tmdb.org/t/p/w92/' + credit.profile_path) : ''} />
                                    {credit.name}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SearchButton;
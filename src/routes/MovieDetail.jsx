import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchMovie } from '../services'
import CrewList from '../components/CrewList';

function MovieDetail() {
    const { id } = useParams()

    const [moviedetail, setMoviedetail] = useState()

    useEffect(() => {
        async function fetchData() {
            const result = await fetchMovie(id)
            setMoviedetail(result)
            console.log(result);
        }
        fetchData()
    }, [id])

    return (
        <>
            {
                !moviedetail ? <div>Loading</div> :
                    (

                        <div style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${moviedetail.backdrop_path}')`, width: "100%", height: "500px", backgroundSize: "cover", backgroundPosition: "top-center", display: "flex", flexDirection: "row", backgroundColor: "rgba(0, 0, 0, 0.5)", backgroundBlendMode: "darken" }}>
                            <div style={{ padding: "40px", maxWidth: "20%", minWidth: "20%", height: "auto" }}>
                                <img src={'https://image.tmdb.org/t/p/w500/' + moviedetail.poster_path} alt={moviedetail.name} />
                            </div>
                            <div style={{ color: "white", padding: "20px", marginRight: "20px", marginTop: "10px", gap: "10px", }}>
                                <h2>{moviedetail.title}</h2><br />
                                <p>{moviedetail.overview}</p><br />
                                <h2>{moviedetail.release_date}</h2>
                            </div>
                        </div>
                    )
            }
            <CrewList movieId={id} />
        </>
    )
}
export default MovieDetail
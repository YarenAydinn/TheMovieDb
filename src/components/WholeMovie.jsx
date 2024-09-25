import axios from "axios";
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

function WholeMovie({ creditId }) {
    const [list, setList] = useState([])
    const navigate = useNavigate();
    
    const fetchMovies = async () => {
        const list = await axios.get(`https://api.themoviedb.org/3/person/${creditId}/combined_credits?api_key=d381d14d16334b30de39fc9d47e1aad6`)
        setList(list.data.cast)
    }
    useEffect(() => {
        fetchMovies()
    }, [creditId])
    const handleClick = (id) => navigate('/movie/' + id)
    
    return (
        <div >
            <ul style={{ display: "flex", flexDirection: "row", overflowX: "auto", whiteSpace: "nowrap", textAlign: "center", gap: "10px", margin: "10px", padding: "10px" }}>
                {list.map((e, i) => {
                    return <li key={i} onClick={() => handleClick(e.id)} style={{ minWidth: "15%", maxHeight: "auto", padding: "10px" }}>
                        <img src={'https://image.tmdb.org/t/p/w342/' + e.poster_path} />
                        {e.title}</li>
                })}
            </ul>
        </div>
    )
}
export default WholeMovie
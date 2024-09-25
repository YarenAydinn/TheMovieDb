import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import WholeMovie  from '../components/WholeMovie'

function Credit() {
    const { id } = useParams()
    const [credit, setCredit] = useState([])

    const fetchCredit = async () => {
        const getCredit = await axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=d381d14d16334b30de39fc9d47e1aad6`)
        setCredit(getCredit.data)
        console.log(getCredit.data);
    }
    useEffect(() => {
        fetchCredit()
    }, [id])

    return (
        <div>
            <div style={{ margin: "20px", display: "flex", flexDirection: "row" }}>
                <div style={{ margin: "20px", minWidth: "25%" }}>
                    <img src={'https://image.tmdb.org/t/p/w342/' + credit.profile_path} alt="" />
                </div>
                <div>
                    <ul style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", justifyContent: "start", gap: "10px", margin: "10px", padding: "10px", marginRight: "20px" }} >

                        <li>
                            <h1>{credit.name}</h1>
                            <p>{credit.known_for_department}</p>
                            <p>{credit.biography}</p>
                        </li>

                    </ul>
                </div>
            </div>
            <div>
                <WholeMovie creditId={id} />
            </div>
        </div>
    )
}
export default Credit
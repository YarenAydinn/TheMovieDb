import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function CrewList({movieId}) {
    
    const navigate=useNavigate();

    const [crew, setcredits] = useState([])
    const fetchCredit = async () => {
        const credits = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=d381d14d16334b30de39fc9d47e1aad6`)
        setcredits(credits.data.cast)
        console.log(credits);
    }
    useEffect(() => {
        fetchCredit()
    }, [movieId])

    const handClick=(id)=>navigate('/person/'+id)
    
    return (
        <>
       <ul o style={{display:"flex",flexDirection:"row",overflowX:"auto",whiteSpace: "nowrap",alignItems:"center",gap:"10px",marginLeft:"20px",marginTop:"20px"}}>
        {(
            crew.splice(0,10).map((e,idx)=>{
                return <li key={idx} onClick={()=>handClick(e.id)} style={{minWidth:"15%",maxHeight:"auto",padding:"10px",cursor:"pointer"}}>
                    <img src={'https://image.tmdb.org/t/p/w342/' + e.profile_path} alt="" />
                    <p style={{textAlign:"center"}}>{e.name}</p>
                </li>
            })
        )}
       </ul>

        </>
    )
}
export default CrewList
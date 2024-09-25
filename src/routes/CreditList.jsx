import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCredits } from "../services";

function CreditList(){
    const naigate=useNavigate()
    const [credits,setCredits]=useState([])
    
    const fetchPeople=async()=>{
        const peopleData=await fetchCredits()
        setCredits(peopleData)
    }
    useEffect(()=>{
        fetchPeople()
    },[])
    const sortedList=credits.sort((a,b)=>b.popularity-a.popularity)
    const getCreditHandleClick=(id)=>naigate('/person/'+id)
    return(
        <div>
            <ul style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",textAlign:"center",marginTop:"30px"}}>
        {
            sortedList.map((credit,idx) => (
                 <li key={idx} onClick={()=>getCreditHandleClick(credit.id)} style={{padding:"20px",cursor:"pointer"}}>
                    <img src={'https://image.tmdb.org/t/p/w342/' + credit.profile_path} alt="" />
                    <h2 style={{padding:"10px"}}>{credit.name}</h2>
                </li>
            ))
            }
            </ul>
        </div>
    )
}
export default CreditList;
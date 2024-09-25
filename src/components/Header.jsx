import { useNavigate } from "react-router-dom";

function Header() {
const navigate=useNavigate();
const filmHandClick=()=>navigate('/')
const peopleHandClick=()=>navigate('/people/')

    return (

        <div className="w-full h-16 bg-cyan-600" style={{display:"flex",flexDirection:"column",justifyContent:"center"}} >
            <div className="logo" style={{ maxWidth: "20%", minWidth: "20%", position: "absolute", left: "15%" }}>
                <img src="https://cdn.cookielaw.org/logos/fe65a9cb-9e2b-4d74-a8ff-1443aee49ffb/53433444-4f4a-4301-9ad8-c0515ad1e9cf/74077dc2-f2a9-4666-9f02-be7d89b542d9/tmdb_logo.png" alt="" />
            </div>
            <div className="routes" style={{display:"flex",gap:"30px",cursor:"pointer",color:"white",position:"absolute",left:"40%"}}>
                <h3 onClick={()=>filmHandClick()}>Movies</h3>
                <h3 onClick={()=>peopleHandClick()}>People</h3>
            </div>
        </div>
    )
}
export default Header
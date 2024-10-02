import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCredits } from "../services";

function CreditList() {
    const navigate = useNavigate()
    const [credits, setCredits] = useState([])
    const [spage, setPage] = useState()
    const [currentPage, setCurrentPage] = useState(1)

    const fetchPeople = async () => {
        const { page, results } = await fetchCredits(currentPage)
        setCredits((current) => [...current, ...results])
        setPage(page)
    }
    useEffect(() => {
        fetchPeople();
    }, [currentPage]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                setCurrentPage((spage) => spage + 1);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const sortedList = credits.sort((a, b) => b.popularity - a.popularity)
    const getCreditHandleClick = (id) => navigate('/person/' + id)
    return (
        <div>
            <ul style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", textAlign: "center", marginTop: "30px" }}>
                {
                    sortedList.map((credit, idx) => (
                        <li key={idx} onClick={() => getCreditHandleClick(credit.id)} className="p-3 cursor-pointer" style={{ width: "10%" }}>
                            <img src={'https://image.tmdb.org/t/p/w342/' + credit.profile_path} alt="" />
                            <h2 style={{ padding: "10px" }}>{credit.name}</h2>
                        </li>
                    ))
                }
            </ul>
            {/* <button onClick={handleLoadMorePeople}>Load More</button> */}
        </div>
    )
}
export default CreditList;
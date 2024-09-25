import axios from 'axios'
import {movieDetailEndpoint,movieListEndpoint,searchMoviesEndpoint} from './API_URLS'

export const fetchMovie = async (id) => {
    const result = await axios.get(movieDetailEndpoint(id))
    return result.data
}

export const fetchMovies = async () => {
    const result = await axios.get(movieListEndpoint())
    return result.data.results
}
export const searchMovie=async(query)=>{
    const result=await axios.get(searchMoviesEndpoint(query))
    return result.data.results
}
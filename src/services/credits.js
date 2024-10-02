import axios from 'axios'
import {creditListEndpoint, searchCreditsEndpoint} from './API_URLS'

export const fetchCredits = async (page) => {
    const result = await axios.get(creditListEndpoint(page))
    return result.data
}
export const searchCredits=async(query)=>{
    const result=await axios.get(searchCreditsEndpoint(query))
    return result.data.results
}


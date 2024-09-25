import axios from 'axios'
import {creditListEndpoint, searchCreditsEndpoint} from './API_URLS'

export const fetchCredits = async () => {
    const result = await axios.get(creditListEndpoint())
    return result.data.results
}
export const searchCredits=async(query)=>{
    const result=await axios.get(searchCreditsEndpoint(query))
    return result.data.results
}


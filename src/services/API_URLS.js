// const language = "en-US"
const language = "tr-TR"
const APIROOTURL = "https://api.themoviedb.org/3/"
const APIKEY = "api_key=d381d14d16334b30de39fc9d47e1aad6"

export const movieListEndpoint = (page) => APIROOTURL+ `discover/movie?include_adult=false&include_video=false&language=${language}&page=${page}&sort_by=popularity.desc&`+APIKEY;
export const movieDetailEndpoint = (movieid) => APIROOTURL +`movie/${movieid}?language=${language}&` +APIKEY;
export const creditListEndpoint=(page)=>APIROOTURL+`person/popular?page=${page}&`+APIKEY;
export const searchCreditsEndpoint=(query)=>APIROOTURL+`search/person?query=${query}&language=${language}&`+APIKEY;
export const searchMoviesEndpoint=(query)=>APIROOTURL+`search/movie?query=${query}&language=${language}&`+APIKEY;
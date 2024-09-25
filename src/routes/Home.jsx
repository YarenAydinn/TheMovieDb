import MovieList from '../components/MovieList'
import '../index.css'
import SearchButton from '../components/SearchButton'
import { useState } from 'react';

export default function Home() {
  const [randomMovie,setRandomMovie]=useState(null)

  return (
    <>
      <SearchButton randomMovie={randomMovie}/>
      <MovieList setSearchButtonBackdrop={setRandomMovie}/>
    </>
  )
}



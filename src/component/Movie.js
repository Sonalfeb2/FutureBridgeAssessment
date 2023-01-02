import React ,{useState, useEffect}from 'react';
import MovieList from './MovieList'
const Movie = () => {
    const [movieData, setMovieData ] = useState([]);
const moviesData = async () =>{
    await fetch('http://localhost:8080/')
    .then((res)=>res.json())
    .then((data)=>setMovieData(()=>data))
    .catch((err)=>setMovieData(()=>[]));
    
} 
useEffect(()=>{
     moviesData();
},[])


    return (
        <div>
            <MovieList list = {movieData} />
        </div>
    );  
}

export default Movie;
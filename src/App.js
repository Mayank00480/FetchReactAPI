import React,{useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies,setMovies] = useState([])
 const fetchMovies = async() =>{
     const response  = await fetch('https://swapi.dev/api/films')
     const res = await response.json();
     const actualData = res.results.map((data)=>{
      return {
        id : data.episode_id,
        title : data.title,
        openingText : data.opening_crawl,
        releaseDate : data.release_date
      } 
})
 setMovies(actualData);
     
 }

  return (
    <React.Fragment>
      <section>
        <button onClick = {fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;

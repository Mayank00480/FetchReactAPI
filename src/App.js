import React,{useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies,setMovies] = useState([])
  const [isLoading , setIsLoading] = useState(false);
 const fetchMovies = async() =>{
  setIsLoading(true);
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
 setIsLoading(false);
     
 }

  return (
    <React.Fragment>
      <section>
        <button onClick = {fetchMovies}>Fetch Movies</button>
      </section>
      <section>
      {!isLoading && <MoviesList movies={movies} />}
      {isLoading && <p>Loading...</p>}
      {!isLoading && movies.length == 0 && <p>No Movies Found</p>}
      </section>
    </React.Fragment>
  );
}

export default App;

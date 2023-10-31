import React,{useEffect, useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import UserForm from './components/UserForm';

function App() {
  const [movies,setMovies] = useState([])
  const [isLoading , setIsLoading] = useState(false);
  const[error ,setError] = useState(null);

 /*  useEffect(() =>{
      fetchMovies()
   },[]); 
   */
   const fetchMovies = async() =>{
    setError(null);
    setIsLoading(true);
    try{
       const response  = await fetch('https://react-app-64b82-default-rtdb.firebaseio.com/movies.json')
       if(!response.ok){
        throw new Error('Something went wrong ...Retrying');
       }
       const res = await response.json();
       let LoadedData = [];
       for(let key in res){
          LoadedData.push({
            id : key,
            title : res[key].title,
            openingText : res[key].openingText,
            releaseDate : res[key].releaseDat 
          })
       }
    /*   const actualData = res.results.map((data)=>{
        return {
          id : data.episode_id,
          title : data.title,
          openingText : data.opening_crawl,
          releaseDate : data.release_date
        } 
  })*/
    
    
   setMovies(LoadedData);
  
    }
    
    catch(err){
      setError(err.message);
    
    }
    setIsLoading(false);
   }
   
const reload = () =>{
  fetchMovies();
}  

  return (
    <React.Fragment>
      <section>
        <UserForm/>
        <button onClick = {fetchMovies}>Fetch Movies</button>
      </section>
      <section>
      {!isLoading && <MoviesList reload = {reload} movies={movies} />}
      {isLoading && <p>Loading...</p>}
      {!isLoading && !error && movies.length == 0 && <p>No Movies Found</p>}
      {!isLoading && error && <p>{error}</p>}
    
      </section>
    </React.Fragment>
  );
}

export default App;

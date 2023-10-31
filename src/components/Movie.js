import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
    const deleteMovie = async() =>{
   console.log(props.id);
   console.log(props)
   try{  
   const data = await fetch('https://react-app-64b82-default-rtdb.firebaseio.com/movies/'+props.id + '.json' ,{
        method : 'DELETE'
      });
    }
    catch(err) {
      console.log(err.message);
    }
     
       props.reload();
      
    }

  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick = {deleteMovie} style={{border : '1px solid black'}} >Delete Movie</button>
    </li>
  );
};

export default Movie;

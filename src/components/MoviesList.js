import React from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
  console.log(props)
  const reload = () =>{
  props.reload()
  }
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        
        <Movie
          reload = {reload}
          key={movie.id}
          id = {movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;

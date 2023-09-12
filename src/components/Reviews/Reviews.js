import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { movieDetailsReviews } from '../API/Api';
import css from './Reviews.module.css';

function Reviews() {
  const [dataMovie, setDataMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const response = movieDetailsReviews(movieId);
    response
      .then(data => {
        setDataMovie(data.results);
      })
      .catch(error => console.log(error));
  }, [movieId]);
  return dataMovie.length === 0 ? (
    <p>Sorry, we don't have information!</p>
  ) : (
    dataMovie.map(({ author_details: { name, username }, content, id }) => (
      <div className={css.reviews} key={id}>
        <h3 className={css.title}>Author: {name + ' ' + username}</h3>
        <p className={css.content}> {content}</p>
      </div>
    ))
  );
}

export default Reviews;

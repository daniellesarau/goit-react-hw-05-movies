import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { movieDetailsCast } from '../API/Api';
import css from './Cast.module.css';

import error from '../Images/nophoto.png';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';

function Cast() {
  const [dataMovie, setDataMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const response = movieDetailsCast(movieId);
    response
      .then(data => {
        setDataMovie(data.cast);
      })
      .catch(error => console.log(error));
  }, [movieId]);
  return dataMovie.length === 0 ? (
    <p>Sorry, we don't have information!</p>
  ) : (
    <ul className={css.list}>
      {dataMovie.map(({ profile_path, name, character, id }) => (
        <li className={css.item} key={nanoid()}>
          <img
            className={css.profile}
            src={profile_path ? BASE_URL + profile_path : error}
            alt={name}
          />
          <div className={css.details}>
            <p className={css.name}>{name}</p>
            <p className={css.character}>Character: {character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default Cast;

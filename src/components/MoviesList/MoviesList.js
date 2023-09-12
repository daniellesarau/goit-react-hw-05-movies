import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import default_poster from '../Images/Poster.jpg';
import PropTypes from 'prop-types';
import css from './MoviesList.module.css';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';
export function MoviesList({ movies }) {
  const location = useLocation();
  return (
    movies.length !== 0 && (
      <ul className={css.list}>
        {movies.map(movie => (
          <li className={css.item} key={movie.id}>
            <Link
              className={css.link}
              to={`${movie.id}`}
              state={{ from: location }}
            >
              <img
                className={css.poster}
                src={
                  movie.poster_path
                    ? BASE_URL + movie.poster_path
                    : default_poster
                }
                alt={movie.original_title}
              />
              <h2 className={css.title}>{movie.original_title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    )
  );
}
MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      original_title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

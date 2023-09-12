import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { trendingMovie } from '../../API/Api';
import default_poster from '../../Images/Poster.jpg';
import css from './Home.module.css';
import { BsFire } from 'react-icons/bs';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';
function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const data = await trendingMovie();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1 className={css.trend_title}>
        {' '}
        <BsFire className={css.icon} />
        Trending Movies <BsFire className={css.icon} />
      </h1>
      <ul className={css.list}>
        {movies.map(movie => (
          <li className={css.item} key={movie.id}>
            <Link
              className={css.link}
              to={`movies/${movie.id}`}
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
    </div>
  );
}

export default Home;

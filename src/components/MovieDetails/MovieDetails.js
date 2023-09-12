import React from 'react';
import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BsPeopleFill } from 'react-icons/bs';
import { MdReviews } from 'react-icons/md';

import { movieDetails } from '../API/Api';
import Loader from 'components/Loader/Loader';

import default_poster from '../Images/Poster.jpg';
import css from './MovieDetails.module.css';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';

function MovieDetails() {
  const [dataMovie, setDataMovie] = useState([]);
  const [loader, setLoader] = useState(false);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    setLoader(true);
    const response = movieDetails(movieId);
    response
      .then(data => {
        setDataMovie(data);
      })
      .catch(error => console.log(error));
    setLoader(false);
  }, [movieId]);

  const { poster_path, overview, original_title, vote_average, genres } =
    dataMovie;
  return (
    <div className={css.container_details}>
      {loader && <Loader />}
      <Link className={css.button_back} to={backLinkHref}>
        <AiOutlineArrowLeft className={css.icon} />
        Back
      </Link>
      <div className={css.details}>
        <img
          className={css.poster}
          src={poster_path ? BASE_URL + poster_path : default_poster}
          alt={original_title}
        />
        <div className={css.movie}>
          <h2>{original_title}</h2>
          <p>{Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul className={css.list_details}>
            {genres?.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
      <ul>
        <li className={css.list_revCast}>
          <Link className={css.link} to="cast" state={location.state}>
            <BsPeopleFill className={css.icon} />
            Cast
          </Link>
        </li>
        <li className={css.list_revCast}>
          <Link className={css.link} to="reviews" state={location.state}>
            <MdReviews className={css.icon} />
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default MovieDetails;

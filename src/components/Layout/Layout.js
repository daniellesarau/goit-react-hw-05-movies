import React from 'react';
import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import { AiFillHome } from 'react-icons/ai';
import { RiMovie2Fill } from 'react-icons/ri';

export function Layout() {
  return (
    <div>
      <nav className={css.layout}>
        <Link className={css.nav_link} to="/">
          <AiFillHome className={css.icon} />
          Home
        </Link>
        <Link className={css.nav_link} to="/movies">
          <RiMovie2Fill className={css.icon} />
          Movies
        </Link>
      </nav>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

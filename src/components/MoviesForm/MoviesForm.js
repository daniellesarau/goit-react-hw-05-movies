import React from 'react';
import { Formik, Field, Form } from 'formik';
import PropTypes from 'prop-types';
import css from './MoviesForm.module.css';
// import { BiSearchAlt2 } from 'react-icons/bi';
export function MoviesForm({ onSubmit }) {
  return (
    <Formik initialValues={{ name: '' }} onSubmit={onSubmit}>
      <Form className={css.form}>
        <Field
          className={css.input}
          name="name"
          placeholder="Search movie"
          type="text"
          autoFocus
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  );
}
MoviesForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

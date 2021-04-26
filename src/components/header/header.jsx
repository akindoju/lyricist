import React from 'react';
import './Header.css';
import { Formik } from 'formik';

const Header = () => {
  return (
    <div className="header">
      <header>
        <h1>Lyricist</h1>
        <Formik
          initialValues={{ keyword: '' }}
          onSubmit={() => console.log('Submitted')}
        >
          {({
            handleBlur,
            handleChange,
            handleSubmit,
            values,
            isSubmitting,
          }) => {
            return (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="keyword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.keyword}
                  placeholder="Enter Artist name or Song title"
                  required
                />
                <button type="submit">Search</button>
              </form>
            );
          }}
        </Formik>
      </header>
    </div>
  );
};

export default Header;

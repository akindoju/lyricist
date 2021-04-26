import React, { useState } from 'react';
import './Header.css';
import { Formik } from 'formik';
import Body from '../Body/Body';

const Header = () => {
  const [searchResult, setSearchResult] = useState([]);

  return (
    <div>
      <header>
        <h1>Lyricist</h1>
        <Formik
          initialValues={{ keyword: '' }}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(true);

            await fetch(`https://api.lyrics.ovh/suggest/${values.keyword}`)
              .then((res) => res.json())
              .then((data) => {
                setSearchResult(data.data);
              });
          }}
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
      <Body searchResult={searchResult} />
    </div>
  );
};

export default Header;

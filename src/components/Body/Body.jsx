import React from 'react';
import './Body.css';

const Body = (props) => {
  const { searchResult } = props;
  return (
    <div className="body">
      <div id="result" class="container">
        <p>Results will be displayed here:</p>
      </div>

      <ul className="songs">
        {searchResult.map((result) => {
          return (
            <li className="result">
              <span>
                <strong>{result.artist.name}</strong> &mdash; {result.title}
              </span>
              <button className="btn">Get Lyrics</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Body;

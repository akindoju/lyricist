import React from 'react';
import './body.css';

const Body = (props) => {
  const { result } = props;

  return (
    <div>
      {result.data.map((song) => {
        return (
          <div className="container">
            <ul>
              <li>
                <span>
                  <strong>{song.artist.name}</strong> - {song.title}
                </span>
              </li>
              <button
                className="btn"
                data-artist={song.artist.name}
                data-songtitle={song.title}
              >
                Get Lyrics
              </button>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Body;

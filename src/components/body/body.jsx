import React from 'react';

const Body = (props) => {
  const { result } = props;
  return (
    <div>
      {result.data.map((song) => {
        return (
          <ul>
            <li>
              <span>
                <strong>{song.artist.name}</strong> - {song.title}
              </span>
              <button
                className="btn"
                data-artist={song.artist.name}
                data-songtitle={song.title}
              >
                Get Lyrics
              </button>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Body;

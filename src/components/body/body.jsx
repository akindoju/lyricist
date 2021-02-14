import React from 'react';

const Body = (props) => {
  const { result } = props;
  console.log(result);
  return (
    <div>
      {result.data.map((song) => {
        return (
          <li>
            <span>
              <strong>{song.artist.name}</strong> - {song.title}
            </span>
            <button
              class="btn"
              data-artist={song.artist.name}
              data-songtitle={song.title}
            >
              Get Lyrics
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default Body;

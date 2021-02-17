import React from 'react';
import './songItem.css';

const SongItem = (props) => {
  const { song } = props;
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
};

export default SongItem;

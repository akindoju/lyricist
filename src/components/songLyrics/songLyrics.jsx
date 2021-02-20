import React from 'react';
import './songLyrics.css';

const SongLyrics = (props) => {
  const { song } = props;
  return (
    <div className="lyricsContainer">
      <h2>
        <strong>{song.artist.name}</strong> - {song.title}
      </h2>
      {/* <span>${lyrics}</span> */}
    </div>
  );
};

export default SongLyrics;

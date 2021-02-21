import React, { useState } from 'react';
import SongLyrics from '../songLyrics/songLyrics';
import './songItem.css';

const SongItem = (props) => {
  const { song } = props;
  const [lyricsObj, setLyricsObj] = useState({ lyrics: '' });

  const getLyrics = () => {
    console.log('clicked');
    fetch(`https://api.lyrics.ovh/v1/${song.artist.name}/${song.title}`)
      .then((res) => res.json())
      .then((songLyrics) => {
        setLyricsObj(songLyrics);
        console.log(songLyrics);
      })
      .catch((error) => console.log(error));
  };

  return (
    <li>
      <div className="container">
        <span>
          <strong>{song.artist.name}</strong> - {song.title}
        </span>
        <button className="btn" onClick={getLyrics}>
          Get Lyrics
        </button>
      </div>
      <SongLyrics lyrics={lyricsObj.lyrics} />
    </li>
  );
};

export default SongItem;

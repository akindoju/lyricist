import React from 'react';
import './body.css';
import SongItem from '../songItem/songItem';

const Body = (props) => {
  const { result } = props;

  return (
    <div>
      <ul>
        {result.data.map((songData) => {
          return <SongItem song={songData} />;
        })}
      </ul>
    </div>
  );
};

export default Body;

import React from 'react';
import './body.css';
import SongItem from '../songItem/songItem';

const Body = (props) => {
  const { result } = props;

  return (
    <div>
      {result.data.map((songData) => {
        return <SongItem song={songData} />;
      })}
    </div>
  );
};

export default Body;

import React, { useState } from 'react';
import './body.css';
import SongItem from '../songItem/songItem';

const Body = (props) => {
  const { result } = props;
  const [bodyContent, changeBodyContent] = useState(
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      Results will be displyed here
    </div>
  );

  return (
    <div>
      {bodyContent}
      <ul>
        {result.data.map((songData) => {
          return <SongItem song={songData} />;
        })}
      </ul>
    </div>
  );
};

export default Body;

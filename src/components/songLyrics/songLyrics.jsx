import React, { Component } from 'react';
import './songLyrics.css';

class SongLyrics extends Component {
  render() {
    const { lyrics } = this.props;

    return (
      <div>
        {lyrics.split('\n').map((lyrics) => {
          return (
            <div className="lyrics">
              {lyrics}
              <br />
            </div>
          );
        })}
      </div>
    );
  }
}

export default SongLyrics;

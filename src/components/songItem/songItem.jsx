import React, { Component } from 'react';
import './songItem.css';

class SongItem extends Component {
  constructor(props) {
    super(props);
    this.state = { lyrics: '' };
  }

  getLyrics = () => {
    try {
      console.log('clicked');
      const { song } = this.props;
      fetch(`https://api.lyrics.ovh/v1/${song.artist.name}/${song.title}`)
        .then((res) => res.json())
        .then((lyrics) => console.log(lyrics));
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { song } = this.props;
    return (
      <div className="container">
        <ul>
          <li>
            <span>
              <strong>{song.artist.name}</strong> - {song.title}
            </span>
          </li>
          <button className="btn" onClick={this.getLyrics}>
            Get Lyrics
          </button>
        </ul>
      </div>
    );
  }
}

export default SongItem;

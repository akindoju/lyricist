import React, { Component } from 'react';
import './songItem.css';

class SongItem extends Component {
  constructor(props) {
    super(props);
    this.state = { lyrics: { lyrics: '' } };
  }

  getLyrics = () => {
    console.log('clicked');
    const { song } = this.props;
    fetch(`https://api.lyrics.ovh/v1/${song.artist.name}/${song.title}`)
      .then((res) => res.json())
      .then((lyrics) => {
        console.log(lyrics);
        this.setState({ lyrics: lyrics });
      })
      .catch((error) => console.log(error));
  };

  render() {
    const { song } = this.props;
    const lyrics = this.state.lyrics.lyrics;

    return (
      <li>
        <div className="container">
          <span>
            <strong>{song.artist.name}</strong> - {song.title}
          </span>
          <button className="btn" onClick={this.getLyrics}>
            Get Lyrics
          </button>
        </div>
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
      </li>
    );
  }
}

export default SongItem;

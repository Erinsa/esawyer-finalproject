// General References:

// Howler Library:
// https://stackoverflow.com/questions/54886538/how-to-use-howler-js-in-react
// https://howlerjs.com/

import React, { Component } from 'react';
import './music.css';
import { Howl, Howler } from 'howler';

class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      music: false, 
      sound: new Howl({
        src: ["assets/GameMusic_3DPlatformer.mp3"],
        loop: true,
        volume: 0.5,
      })
    };

  };

//   Used the following to help debug with Howler and React
//   https://stackoverflow.com/questions/70127003/howler-js-react-audiocontext-console-warning
  musicController = () => { 
    if (this.state.music == false){
      this.state.sound.play();
    }
    else {
      this.state.sound.pause()
    }
    let new_music_state = !this.state.music;
    this.setState({music: new_music_state});
  }

    render() {
  
        return (
            <button id = "music_button" className= {this.state.music ? 'music_button_true' : 'music_button_false'} onClick={() => {this.musicController()}} aria-label= {"Music Controller: " + `${this.state.music ? "Music Currently On" : "Music Currently Off"}`}></button>
        );
    }
}

export default MusicPlayer;
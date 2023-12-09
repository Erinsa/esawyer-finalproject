// Used lab activity (notecard) for reference

import React, { Component } from 'react';
// import { useState } from 'react';
import './music.css';
// import Header from './header.js';
// import Cart from './cart.js';
// import {JackInTheBox, Fade} from "react-awesome-reveal";
// import { AttentionSeeker } from "react-awesome-reveal";
import { Howl, Howler } from 'howler';
import { Link, Route, Routes } from 'react-router-dom';
import MenuPage from './menu.js';
import newSound from './assets/GameMusic_3DPlatformer.mp3';
import ink from "./assets/Ink.png";

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
        // <div className='music_holder'>
            <button className= {this.state.music ? 'music_button_true' : 'music_button_false'} onClick={() => {this.musicController()}}></button>
        // </div>
        );
    }
  }

export default MusicPlayer;
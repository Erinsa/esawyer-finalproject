// General References:

// React Awesome Reveal:
// https://react-awesome-reveal.morello.dev/
// https://github.com/morellodev/react-awesome-reveal
// Helped me find the library: https://dev.to/arafat4693/best-animation-libraries-for-react-156n

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AttentionSeeker } from "react-awesome-reveal";
import './menu.css';

class MenuPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        character_menu_shown: false
      };
    };

    playExpansionHandler  = () => { 
      let new_state = !this.state.character_menu_shown
      this.setState({character_menu_shown: new_state}); 
    }
  
    render() {
      
      const menu_state = {
        visibility: this.state.character_menu_shown ? "visible" : "hidden", 
        opacity: this.state.character_menu_shown ? 1 : 0,
        transition: "visibility 0.3s linear, opacity 0.3s linear"
      };
      
      return (
      
        <article className = "main_holder">

          <h1 className = "menu_title">Moji Match</h1>

          <button className = "play_button" onClick = {() => {this.playExpansionHandler()}} aria-label = "Play button">Play!</button>
          
          {/* Reference for react awesome reveal attention seekers:
          https://react-awesome-reveal.morello.dev/guides/attention-seekers */}
          <AttentionSeeker className = "reveal_squid" effect = "pulse" duration = "2000" triggerOnce = "false" delay = "50">
            <img className = "menu_squid" src = {"Menu_Squid.png"} width = "200" alt = {"A green cartoonish squid holding a burst of ink, flags, writing utensils, and paper"}/>
          </AttentionSeeker>
          <AttentionSeeker className = "reveal_bubble" effect = "pulse" duration = "2000" delay = "125" >
            <img className = "menu_bubble" src = {"assets/Menu_Bubble.png"} width = "200" alt = {"A cartoonish bubble holding a Japanese Kanji character"}/>
          </AttentionSeeker>

          <section className = "character_menu" style = {menu_state}>
          <button className = "close_button" onClick = {() => {this.playExpansionHandler()}} aria-label = "Close character option menu button"></button>
            <div className = "character_menu_text">
              What would you like to practice?
            </div>
            <div className = "character_menu_button_holder">
              <a className = "character_menu_button" href = "#/hiraganagamepage">
                <button className = "actual_button" aria-label = "Hiragana Button">Hiragana</button>
              </a>
              <a className = "character_menu_button" href = "#/katakanagamepage">
                <button className = "actual_button" aria-label = "Katakana Button">Katakana</button>
              </a>
              <a className = "character_menu_button" href = "#/kanjigamepage">
                <button className = "actual_button" aria-label = "Kanji Button">Kanji</button>
              </a>
            </div>
          </section>
  
        </article>
  
      );
    }
  }
  
  export default MenuPage;
  
  
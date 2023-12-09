import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AttentionSeeker } from "react-awesome-reveal";
import './menu.css';

class MenuPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    };
  
  
    render() {
  
      
      return (
      
        <article className='main_holder'>

          <header className='menu_title'>Moji Match</header>

          <Link to="/gamepage"><button className='play_button' aria-label = "Play Button">Play!</button></Link>

          <AttentionSeeker className = "reveal_squid" effect = "pulse" duration = "2000" triggerOnce = "false" delay = "50">
            <img className = "menu_squid" src = {"Menu_Squid.png"} width = "200" alt = {"A cheery, green cartoonish squid holding a burst of ink, a Japanese flag, a pencil, a caligraphy pen, a Michigan State University Japanese Department flag, a paint brush, and paper for practicing Japanese characters. "}  />
          </AttentionSeeker>
          <AttentionSeeker className = "reveal_bubble" effect = "pulse" duration = "2000" delay = "125" >
            <img className = "menu_bubble" src = {"assets/Menu_Bubble.png"} width = "200" alt = {"A cartoonish bubble holding the Japanese Kanji character that amkes up the first half of the word Kanji in Japanese."}  />
          </AttentionSeeker>
  
        </article>
  
      );
    }
  }
  
  export default MenuPage;
  
  
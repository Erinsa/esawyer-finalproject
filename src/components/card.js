import React, { Component } from 'react';
import { useState } from "react";
import './card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.toggleFlip.bind(this); 
    this.toggleFlipAction.bind(this); 
    this.state = {
      flip: false,
      matched: false,
    };   
  }

  toggleFlipAction() {

    let hasFlippedCard_var = this.props.hasFlippedCard;
    let firstCard_var = this.props.firstCard;
    let secondCard_var = this.props.secondCard;

    if (hasFlippedCard_var == true) {
      this.props.setParentSecondCard(this);

      if (this.props.card_match == this.props.firstCard.props.card_match && firstCard_var != this) {
        let collected_card_choice = "";

        setTimeout(() => { 
          let new_match_state = true;
          this.props.setParentMatch(new_match_state);

          if (this.props.card_lang == "Jpn"){
            collected_card_choice = this;
          }

          else {
            collected_card_choice = this.props.firstCard;
          }

          this.props.addToMatchHandler(collected_card_choice);
        }, 1000); 

        setTimeout(() => { 
          let matched_first_card = this.props.firstCard;
          matched_first_card.state.matched = true;
          let new_matched_state = true;
          let new_match_state2 = false;
          let prev_score = parseInt(this.props.score);
          let new_score = prev_score + 1;
          this.setState({
            matched: new_matched_state,
          })
          this.props.setParentFirstCard(matched_first_card);
          this.props.setParentMatch(new_match_state2);
          this.props.setParentScore(new_score);
        }, 2000); 
      }

      if (firstCard_var == this){
        this.props.setParentFirstCard("");
        this.props.setParentFlippedCard(false);
      }

      else {
        let new_no_match_locker_state = true;
        this.props.setParentNoMatchLocker(new_no_match_locker_state);

        setTimeout(() => { 
          let flipped_first_card = this.props.firstCard;
          flipped_first_card.state.flip = false;
          let new_flip_state = !this.state.flip;
          this.setState({flip: new_flip_state,})
          this.props.setParentFirstCard(flipped_first_card)
        }, 2000); 

        setTimeout(() => { 
          let new_no_match_locker_state_two = false;
          this.props.setParentNoMatchLocker(new_no_match_locker_state_two);
        }, 2000); 
      }
      this.props.setParentFlippedCard(false)
    }

    if (this.props.hasFlippedCard == false) {
      hasFlippedCard_var = true;
      firstCard_var = this;
      this.props.setParentFirstCard(firstCard_var);
      this.props.setParentFlippedCard(hasFlippedCard_var);
    }
  };

  toggleFlip() {
    let new_flip_state = !this.state.flip;
    this.setState({
      flip: new_flip_state,
    }, this.toggleFlipAction);
  }

  // Used this reference for help enabling enter key press to activate flip:
  // https://stackoverflow.com/questions/31272207/to-call-onchange-event-after-pressing-enter-key
  toggleFlipKey(e) {
    if (e.key === "Enter") {
      let new_flip_state = !this.state.flip;
      this.setState({
        flip: new_flip_state,
      }, this.toggleFlipAction);
    }
  }

  render() {

    const flip_state = {
      transform: this.state.flip ? "rotatey(180deg)" : "", 
      transition: "transform 1s",
      transformStyle: "preserve-3d"
    };

    const visible_state = {
      visibility: this.state.matched ? "hidden" : "visible", 
      opacity: this.state.matched ? 0 : 1,
      transition: "visibility 0.3s linear,opacity 0.3s linear"
    };

     const flip_matched_state = {
      visibility: this.state.matched ? "hidden" : "visible",
      transform: this.state.flip ? "rotatey(180deg)" : "", 
      transition: "transform 2s",
      transformStyle: "preserve-3d"
    };

    return (

      // Used these references to learn about tab index (helped with accesibility)
      // https://stackoverflow.com/questions/73401150/tab-selection-ignores-all-elements-generated-within-loop-in-react
      // https://stackoverflow.com/questions/43503964/onkeydown-event-not-working-on-divs-in-react
      <div className = "memory_card" onClick = {() => {{this.toggleFlip()}}} onKeyDown = {(e) => {{this.toggleFlipKey(e)}}} style = {flip_matched_state} tabIndex = {0} aria-label = "Memory Card">
          <img className = "back-face" src = {this.props.card_back_img_src} width = "200" alt = {this.props.card_back_img_alt} style = {visible_state} />
          <img className = "front-face" src = {this.props.card_front_img_src} width = "200" alt = {this.props.card_front_img_alt} style = {visible_state}/>
      </div>

    );

  }
}

export default Card;
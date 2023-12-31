// General References:

// Started with this reference for a memory game in vanilla javascript (no react) to help understand logic as I created the game in react
// https://marina-ferreira.github.io/tutorials/js/memory-game/


import React, { Component } from 'react';
import './gamepage.css';
import Card from '../components/card.js';
import CollectedMatch from '../components/collectedmatch.js';
import { Link } from 'react-router-dom';

class HiraganaGamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Variable holding flashcard data
      // Used the following reference to help with shuffling (see end of array)
      // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
      cardData: [
        {
            card_name: "Ka_Eng",
            term_text: "Ka_Eng",
            match: "Ka",
            lang: "Eng", 
            back_img_src: "assets/cards/Card_Back.png",
            back_img_alt: "Cartoonish Squid Mascot (Card Back)",
            front_img_src: "assets/cards/Ka_Card_Hiragana_English.png",
            front_img_alt: "The romanized sound for the hiragana character ka represented by the letters k and a",
          },
          {
            card_name: "Ka_Jpn",
            term_text: "Ka_Jpn",
            match: "Ka",
            lang: "Jpn", 
            back_img_src: "assets/cards/Card_Back.png",
            back_img_alt: "Cartoonish Squid Mascot (Card Back)",
            front_img_src: "assets/cards/Ka_Card_Hiragana_Japanese.png",
            front_img_alt: "the Japanese hiragana character for Ka",
          },
          {
            card_name: "A_Eng",
            term_text: "A_Eng",
            match: "A",
            lang: "Eng", 
            back_img_src: "assets/cards/Card_Back.png",
            back_img_alt: "Cartoonish Squid Mascot (Card Back)",
            front_img_src: "assets/cards/A_Card_Hiragana_English.png",
            front_img_alt: "The romanized sound for the hiragana character a represented by the letter a",
        },
        {
            card_name: "A_Jpn",
            term_text: "A_Jpn",
            match: "A",
            lang: "Jpn", 
            back_img_src: "assets/cards/Card_Back.png",
            back_img_alt: "Cartoonish Squid Mascot (Card Back)",
            front_img_src: "assets/cards/A_Card_Hiragana_Japanese.png",
            front_img_alt: "the Japanese hiragana character for A",
        },
        {
            card_name: "I_Eng",
            term_text: "I_Eng",
            match: "I",
            lang: "Eng", 
            back_img_src: "assets/cards/Card_Back.png",
            back_img_alt: "Cartoonish Squid Mascot (Card Back)",
            front_img_src: "assets/cards/I_Card_Hiragana_English.png",
            front_img_alt: "The romanized sound for the hiragana character i represented by the letter i",
        },
        {
            card_name: "I_Jpn",
            term_text: "I_Jpn",
            match: "I",
            lang: "Jpn", 
            back_img_src: "assets/cards/Card_Back.png",
            back_img_alt: "Cartoonish Squid Mascot (Card Back)",
            front_img_src: "assets/cards/I_Card_Hiragana_Japanese.png",
            front_img_alt: "the Japanese hiragana character for I",
        },
        {
            card_name: "U_Eng",
            term_text: "U_Eng",
            match: "U",
            lang: "Eng", 
            back_img_src: "assets/cards/Card_Back.png",
            back_img_alt: "Cartoonish Squid Mascot (Card Back)",
            front_img_src: "assets/cards/U_Card_Hiragana_English.png",
            front_img_alt: "The romanized sound for the hiragana character u represented by the letter u",
        },
        {
            card_name: "U_Jpn",
            term_text: "U_Jpn",
            match: "U",
            lang: "Jpn", 
            back_img_src: "assets/cards/Card_Back.png",
            back_img_alt: "Cartoonish Squid Mascot (Card Back)",
            front_img_src: "assets/cards/U_Card_Hiragana_Japanese.png",
            front_img_alt: "the Japanese hiragana character for U",
        },
        {
            card_name: "E_Eng",
            term_text: "E_Eng",
            match: "E",
            lang: "Eng", 
            back_img_src: "assets/cards/Card_Back.png",
            back_img_alt: "Cartoonish Squid Mascot (Card Back)",
            front_img_src: "assets/cards/E_Card_Hiragana_English.png",
            front_img_alt: "The romanized sound for the hiragana character e represented by the letter e",
        },
        {
            card_name: "E_Jpn",
            term_text: "E_Jpn",
            match: "E",
            lang: "Jpn", 
            back_img_src: "assets/cards/Card_Back.png",
            back_img_alt: "Cartoonish Squid Mascot (Card Back)",
            front_img_src: "assets/cards/E_Card_Hiragana_Japanese.png",
            front_img_alt: "the Japanese hiragana character for E",
        },
        {
            card_name: "O_Eng",
            term_text: "O_Eng",
            match: "O",
            lang: "Eng", 
            back_img_src: "assets/cards/Card_Back.png",
            back_img_alt: "Cartoonish Squid Mascot (Card Back)",
            front_img_src: "assets/cards/O_Card_Hiragana_English.png",
            front_img_alt: "The romanized sound for the hiragana character o represented by the letter o",
        },
        {
            card_name: "O_Jpn",
            term_text: "O_Jpn",
            match: "O",
            lang: "Jpn", 
            back_img_src: "assets/cards/Card_Back.png",
            back_img_alt: "Cartoonish Squid Mascot (Card Back)",
            front_img_src: "assets/cards/O_Card_Hiragana_Japanese.png",
            front_img_alt: "the Japanese hiragana character for O",
        },
        {
            card_name: "Se_Eng",
            term_text: "Se_Eng",
            match: "Se",
            lang: "Eng", 
            back_img_src: "assets/cards/Card_Back.png",
            back_img_alt: "Cartoonish Squid Mascot (Card Back)",
            front_img_src: "assets/cards/Se_Card_Hiragana_English.png",
            front_img_alt: "The romanized sound for the hiragana character se represented by the letters s and e",
        },
        {
            card_name: "Se_Jpn",
            term_text: "Se_Jpn",
            match: "Se",
            lang: "Jpn", 
            back_img_src: "assets/cards/Card_Back.png",
            back_img_alt: "Cartoonish Squid Mascot (Card Back)",
            front_img_src: "assets/cards/Se_Card_Hiragana_Japanese.png",
            front_img_alt: "the Japanese hiragana character for Se",
        },
        {
            card_name: "Tsu_Eng",
            term_text: "Tsu_Eng",
            match: "Tsu",
            lang: "Eng", 
            back_img_src: "assets/cards/Card_Back.png",
            back_img_alt: "Cartoonish Squid Mascot (Card Back)",
            front_img_src: "assets/cards/Tsu_Card_Hiragana_English.png",
            front_img_alt: "The romanized sound for the hiragana character tsu represented by the letters t, s, and u",
        },
        {
            card_name: "Tsu_Jpn",
            term_text: "Tsu_Jpn",
            match: "Tsu",
            lang: "Jpn", 
            back_img_src: "assets/cards/Card_Back.png",
            back_img_alt: "Cartoonish Squid Mascot (Card Back)",
            front_img_src: "assets/cards/Tsu_Card_Hiragana_Japanese.png",
            front_img_alt: "the Japanese hiragana character for Tsu",
        },
      ].sort(() => Math.random() - 0.5),
      // Holds score (number of matches made thus far)
      score: 0,
      // State variable for if one card is already flipped
      hasFlippedCard: false,
      // Variable holding the first card flipped
      firstCard: "",
      // Variable holding the sceond card flipped
      secondCard: "",
      // Variable indicating whetehr a match has been made
      match: false,
      // Variable indicating if the game has been won / the win menu should be shown
      win: true,
      // Number of possible matches (win condition)
      num_matches: 8,
      // Array to hold matches made
      matchList: [],
      // Variable indicating if the match section is expanded or not
      match_collection_expanded: false,
      // Variable indicating if the how to play section is expanded or not
      instructions_expanded: false,
      // Variable indicating if locker is on to prevent glitches from clicking too fast 
      no_match_locker: false
    };

  };

  // Functions for handling game states from card component

  setParentFlippedCard = (new_flip_state) => { 
    this.setState(prevState => ({
      ...prevState,
      hasFlippedCard: new_flip_state,
    }));
  };

  setParentFirstCard = (new_first_card) => { 
    this.setState(prevState => ({
      ...prevState,
      firstCard: new_first_card,
    }));
  };

  setParentSecondCard = (new_second_card) => { 
    this.setState(prevState => ({
      ...prevState,
      secondCard: new_second_card,
    }));
  }; 

  setParentMatch = (new_match) => { 
    this.setState(prevState => ({
      ...prevState,
      match: new_match,
    }));
  };

  setParentNoMatchLocker = (new_no_match_locker) => { 
    this.setState(prevState => ({
      ...prevState,
      no_match_locker: new_no_match_locker,
    }));
  };

  setParentScore = (new_score) => { 
    this.setState(prevState => ({
      ...prevState,
      score: new_score,
    }));
  };

  addToMatchHandler = (jpn_card) => {
    const newCard = jpn_card;

    let newCollectedCard = {
      card_name: newCard.props.card_name,
      card_img: newCard.props.card_front_img_src,
      card_img_alt: newCard.props.card_front_img_alt,
      card_match: newCard.props.card_match
    };

    const newMatchList = this.state.matchList;
    newMatchList.push(newCollectedCard);

    this.setState(prevState => ({
      ...prevState,
      matchList: newMatchList,
    }));
  };

  // Functions for handling the expansion / toggling visibility of game menus

  matchCollectionExpansionHandler  = () => { 
    let new_state = !this.state.match_collection_expanded;
    this.setState(prevState => ({
      ...prevState,
      match_collection_expanded: new_state,
    }));
  };

  instructionsExpansionHandler  = () => { 
    let new_state = !this.state.instructions_expanded;
    this.setState(prevState => ({
      ...prevState,
      instructions_expanded: new_state,
    }));
  };

  render() {

    // Inline styles for conditional rendering

    // Style for match message
    const message_state = {
      visibility: this.state.match ? "visible": "hidden", 
      opacity: this.state.match ? .9 : 0,
      transition: "visibility 0.3s linear, opacity 0.3s linear"
    };

    // Style for match locker (helps prevent glitches from clicking too fast)
    const match_locker_state = {
      visibility: this.state.match ? "visible": "hidden",
    };

    // Style for no match locker (helps prevent glitches from clicking too fast)
    const no_match_locker_state = {
      visibility: this.state.no_match_locker ? "visible": "hidden",
    };

    // Style for expanded match section
    const match_collection_state = {
      visibility: this.state.match_collection_expanded ? "visible": "hidden",
    };

    // Style for how to play section
    const instructions_state = {
      visibility: this.state.instructions_expanded ? "visible" : "hidden",
    };

    // Style for win menu
    const win_state = {
      visibility: this.state.score == this.state.num_matches ? "visible": "hidden", 
      opacity: this.state.win ? 1 : 0,
      transition: "visibility 0.3s linear,opacity 0.3s linear"
    };

    return (
    
      <main className = "HomePage">
        {/* Uses React router to help you return to menu following standard website conventions */}
        <a className = "other_link" href = "#/menupage">
          <button className = "menu_button" aria-label = "Return to menu button">
            <h1 className = "menu_button_text">Moji Match</h1>
          </button>
        </a>

        {/* Code for matches section (small) */}
        <section className="matches_counter_small">
          Matches:
          <div className = "score_holder">
            {this.state.score}
          </div>
          <button className="expand_button" onClick={() => {this.matchCollectionExpansionHandler()}} aria-label= "Expand matches section button"></button>
        </section>

        {/* Code for matches section (expanded) */}
        <section className="matches_counter_expanded" style = {match_collection_state}>
          Matches: {this.state.score}
          <div className = "matches_made_holder">
            {this.state.matchList.map((collected_matchcard, idx) => 
              <CollectedMatch
                key = {idx}
                collectedIndex = {idx}
                card_name = {collected_matchcard.card_name}
                card_img = {collected_matchcard.card_img}
                card_img_alt = {collected_matchcard.card_img_alt}
                card_match = {collected_matchcard.card_match}
              />
            )}
          </div>
          <button className="minimize_button" onClick = {() => {this.matchCollectionExpansionHandler()}} aria-label= "Minimize matches section button"></button>
        </section>
      
        {/* Code for how to play section */}
        <button className ="help_button" onClick = {() => {this.instructionsExpansionHandler()}} aria-label= "How to play button">How to Play</button>
        <section className ="help_message" style = {instructions_state}>
          <div className = "help_text"> Flip over cards to try to match the Japanese characters to their English meaning!</div>
          <button className= "close_button_gamepage" onClick = {() => {this.instructionsExpansionHandler()}} aria-label = "Closes how to play section"></button>
        </section>
        
        {/* Code for main game board and cards on it */}
        <section className = "card_holder"> 
          {this.state.cardData.map((matchcard, idx) => 
            <Card
              key = {matchcard.card_name}
              card_name = {matchcard.card_name}
              cardIndex = {idx}
              card_term_text = {matchcard.term_text}
              card_back_img_src = {matchcard.back_img_src}
              card_back_img_alt = {matchcard.back_img_alt}
              card_front_img_src = {matchcard.front_img_src}
              card_front_img_alt = {matchcard.front_img_alt}
              card_match = {matchcard.match}
              card_lang = {matchcard.lang}
              hasFlippedCard = {this.state.hasFlippedCard}
              firstCard = {this.state.firstCard}
              secondCard = {this.state.secondCard}
              score = {this.state.score}
              setParentFlippedCard = {this.setParentFlippedCard}
              setParentFirstCard = {this.setParentFirstCard}
              setParentSecondCard = {this.setParentSecondCard}
              setParentMatch = {this.setParentMatch}
              setParentNoMatchLocker = {this.setParentNoMatchLocker}
              setParentScore = {this.setParentScore}
              addToMatchHandler = {this.addToMatchHandler}
            />
          )}  
        </section>
        
        <div className = "match_locker" style = {no_match_locker_state}></div>
        {/* Code for match message */}
        <div className = "match_message" style = {message_state} >
          MATCH!
        </div>
        <div className = "match_locker" style = {match_locker_state}></div>
        
        {/* Code for win menu */}
        <section className = "win_message" style = {win_state}>
          <img className = "winning_squid" src = {"assets/Squid_Happy.png"} width = "200" alt = {"Extra happy cartoonish green squid mascot"}  />
          <div className = "winning_text" >
            CONGRATS! You've won! Great job studying!
          </div>
          <div className = "winning_button_holder">
            <a href = "#/menupage">
              <button className ='back_to_menu_button' aria-label = "Back to menu button">
                Return to Menu
              </button>
            </a>
          </div>
        </section>

      </main>

    );
  }
}

export default HiraganaGamePage;
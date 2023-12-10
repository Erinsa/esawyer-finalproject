// General References:

// Started with this reference for a memory game in vanilla javascript (no react) to help understand logic as I created the game in react
// https://marina-ferreira.github.io/tutorials/js/memory-game/



import React, { Component } from 'react';
import './gamepage.css';
import Card from './card.js';
import CollectedMatch from './collectedmatch.js';
import { Link } from 'react-router-dom';

class KanjiGamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Variable holding flashcard data
      // Used the following reference to help with shuffling (see end of array)
      // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
      cardData: [
        {
          card_name: "Tree_Eng",
          term_text: "Tree_Eng",
          match: "Tree",
          lang: "Eng", 
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Cartoonish Squid Mascot (Card Back)",
          front_img_src: "assets/cards/Tree_Card_English.png",
          front_img_alt: "The english word tree and a tree icon",
        },
        {
          card_name: "Person_Jpn",
          term_text: "Person_Jpn",
          match: "Person",
          lang: "Jpn", 
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Cartoonish Squid Mascot (Card Back)",
          front_img_src: "assets/cards/Person_Card_Japanese.png",
          front_img_alt: "The Japanese Kanji symbol for person",
        },
        {
          card_name: "Person_Eng",
          term_text: "Person_Eng",
          match: "Person",
          lang: "Eng", 
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Cartoonish Squid Mascot (Card Back)",
          front_img_src: "assets/cards/Person_Card_English.png",
          front_img_alt: "The english word person and a person icon",
        },
        {
          card_name: "Tree_Jpn",
          term_text: "Tree_Jpn",
          match: "Tree",
          lang: "Jpn", 
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Cartoonish Squid Mascot (Card Back)",
          front_img_src: "assets/cards/Tree_Card_Japanese.png",
          front_img_alt: "The Japanese Kanji symbol for tree",
        },
        {
          card_name: "Month_Eng",
          term_text: "Month_Eng",
          match: "Month",
          lang: "Eng", 
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Cartoonish Squid Mascot (Card Back)",
          front_img_src: "assets/cards/Month_Card_English.png",
          front_img_alt: "The english word month and a moon icon",
        },
        {
          card_name: "Month_Jpn",
          term_text: "Month_Jpn",
          match: "Month",
          lang: "Jpn", 
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Cartoonish Squid Mascot (Card Back)",
          front_img_src: "assets/cards/Month_Card_Japanese.png",
          front_img_alt: "The Japanese Kanji symbol for month",
        },
        {
          card_name: "Day_Eng",
          term_text: "Day_Eng",
          match: "Day",
          lang: "Eng", 
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Cartoonish Squid Mascot (Card Back)",
          front_img_src: "assets/cards/Day_Card_English.png",
          front_img_alt: "The english word day and a sun icon",
        },
        {
          card_name: "Day_Jpn",
          term_text: "Day_Jpn",
          match: "Day",
          lang: "Jpn", 
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Cartoonish Squid Mascot (Card Back)",
          front_img_src: "assets/cards/Day_Card_Japanese.png",
          front_img_alt: "The Japanese Kanji symbol for day",
        },
        {
          card_name: "Book_Eng",
          term_text: "Book_Eng",
          match: "Book",
          lang: "Eng", 
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Cartoonish Squid Mascot (Card Back)",
          front_img_src: "assets/cards/Book_Card_English.png",
          front_img_alt: "The english word book and a book icon",
        },
        {
          card_name: "Book_Jpn",
          term_text: "Book_Jpn",
          match: "Book",
          lang: "Jpn", 
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Cartoonish Squid Mascot (Card Back)",
          front_img_src: "assets/cards/Book_Card_Japanese.png",
          front_img_alt: "The Japanese Kanji symbol for book",
        },
        {
          card_name: "Year_Eng",
          term_text: "Year_Eng",
          match: "Year",
          lang: "Eng",
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Cartoonish Squid Mascot (Card Back)",
          front_img_src: "assets/cards/Year_Card_English.png",
          front_img_alt: "The english word year and a calendar icon",
        },
        {
          card_name: "Year_Jpn",
          term_text: "Year_Jpn",
          match: "Year",
          lang: "Jpn",
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Cartoonish Squid Mascot (Card Back)",
          front_img_src: "assets/cards/Year_Card_Japanese.png",
          front_img_alt: "The Japanese Kanji symbol for year",
        },
        {
          card_name: "Country_Eng",
          term_text: "Country_Eng",
          match: "Country",
          lang: "Eng",
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Cartoonish Squid Mascot (Card Back)",
          front_img_src: "assets/cards/Country_Card_English.png",
          front_img_alt: "The english word country and an icon of Japan",
        },
        {
          card_name: "Country_Jpn",
          term_text: "Country_Jpn",
          match: "Country",
          lang: "Jpn",
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Cartoonish Squid Mascot (Card Back)",
          front_img_src: "assets/cards/Country_Card_Japanese.png",
          front_img_alt: "The Japanese Kanji symbol for country",
        },
        {
          card_name: "Car_Eng",
          term_text: "Car_Eng",
          match: "Car",
          lang: "Eng",
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Cartoonish Squid Mascot (Card Back)",
          front_img_src: "assets/cards/Car_Card_English.png",
          front_img_alt: "The english word car and a car icon",
        },
        {
          card_name: "Car_Jpn",
          term_text: "Car_Jpn",
          match: "Car",
          lang: "Jpn",
          back_img_src: "assets/cards/Card_Back.png",
          back_img_alt: "Cartoonish Squid Mascot (Card Back)",
          front_img_src: "assets/cards/Car_Card_Japanese.png",
          front_img_alt: "The Japanese Kanji symbol for car",
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
    };

  };

  // Functions for handling game states from card component

  setParentFlippedCard = (new_flip_state) => { 
    this.setState(prevState => ({
      ...prevState,
      hasFlippedCard: new_flip_state,
    }))
  };

  setParentFirstCard = (new_first_card) => { 
    this.setState(prevState => ({
      ...prevState,
      firstCard: new_first_card,
    }))
  }; 

  setParentSecondCard = (new_second_card) => { 
    this.setState(prevState => ({
      ...prevState,
      secondCard: new_second_card,
    }))
  }; 

  setParentMatch = (new_match) => { 
    this.setState(prevState => ({
      ...prevState,
      match: new_match,
    }))
  };

  setParentScore = (new_score) => { 
    this.setState(prevState => ({
      ...prevState,
      score: new_score,
    }))
  };

  addToMatchHandler = (jpn_card) => {
    const newCard = jpn_card;

    let newCollectedCard = {
      card_name: newCard.props.card_name,
      card_img: newCard.props.card_front_img_src,
      card_img_alt: newCard.props.card_front_img_alt,
      card_match: newCard.props.card_match
    }

    const newMatchList = this.state.matchList
    newMatchList.push(newCollectedCard)

    this.setState(prevState => ({
      ...prevState,
      matchList: newMatchList,
    }))
  };

  // Functions for handling the expansion / toggling visibility of game menus

  matchCollectionExpansionHandler  = () => { 
    let new_state = !this.state.match_collection_expanded
    this.setState(prevState => ({
      ...prevState,
      match_collection_expanded: new_state,
    }))
  };

  instructionsExpansionHandler  = () => { 
    let new_state = !this.state.instructions_expanded
    this.setState(prevState => ({
      ...prevState,
      instructions_expanded: new_state,
    }))
  };

  render() {

    // Inline styles for conditional rendering

    // Style for match message
    const message_state = {
      visibility: this.state.match ? 'visible': 'hidden', 
      opacity: this.state.match ? .9 : 0,
      transition: "visibility 0.3s linear, opacity 0.3s linear"
    };

    // Style for match locker (helps prevent glitches from clicking too fast)
    const match_locker_state = {
      visibility: this.state.match ? 'visible': 'hidden',
    };

    // Style for expanded match section
    const match_collection_state = {
      visibility: this.state.match_collection_expanded ? 'visible': 'hidden',
    };

    // Style for how to play section
    const instructions_state = {
      visibility: this.state.instructions_expanded ? 'visible' : 'hidden',
    };

    // Style for win menu
    const win_state = {
      visibility: this.state.score == this.state.num_matches ? 'visible': 'hidden', 
      opacity: this.state.win ? 1 : 0,
      transition: "visibility 0.3s linear,opacity 0.3s linear"
    };


    return (
    
      <article className = "HomePage">
        {/* Uses React router to help you return to menu following standard website conventions */}
        <a href="/menupage"><button className='menu_button' aria-label='Return to menu button'><h1 className = "menu_button_text">Moji Match</h1></button></a>

        {/* Code for matches section (small) */}
        <section className='matches_counter_small'>
          Matches:
          <div className = "score_holder">
            {this.state.score}
          </div>
          <button className='expand_button' onClick={() => {this.matchCollectionExpansionHandler()}} aria-label='Expand matches section button'></button>
        </section>

        {/* Code for matches section (expanded) */}
        <section className='matches_counter_expanded' style={match_collection_state}>
          Matches: {this.state.score}
          <div className = "matches_made_holder">
            {this.state.matchList.map((collected_matchcard, idx) => 
              <CollectedMatch
                key={idx}
                collectedIndex={idx}
                card_name={collected_matchcard.card_name}
                card_img={collected_matchcard.card_img}
                card_img_alt={collected_matchcard.card_img_alt}
                card_match={collected_matchcard.card_match}
              />
            )}
          </div>
          <button className='minimize_button' onClick={() => {this.matchCollectionExpansionHandler()}} aria-label='Minimize matches section button'></button>
        </section>
      
        {/* Code for how to play section */}
        <button className='help_button' onClick={() => {this.instructionsExpansionHandler()}} aria-label='How to play button'>How to Play</button>
        <section className='help_message' style = {instructions_state}>
          <div className = "help_text"> Flip over cards to try to match the Japanese characters to their English meaning!</div>
          <button className='close_button_gamepage' onClick={() => {this.instructionsExpansionHandler()}} aria-label='closes how to play section'></button>
        </section>
        
        {/* Code for main game board and cards on it */}
        <section className = "card_holder"> 
          {this.state.cardData.map((matchcard, idx) => 
            <Card
            key={matchcard.card_name}
            card_name = {matchcard.card_name}
            cardIndex={idx}
            card_term_text={matchcard.term_text}
            card_back_img_src={matchcard.back_img_src}
            card_back_img_alt={matchcard.back_img_alt}
            card_front_img_src={matchcard.front_img_src}
            card_front_img_alt={matchcard.front_img_alt}
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
            setParentScore = {this.setParentScore}
            addToMatchHandler = {this.addToMatchHandler}
            />
          )}  
        </section>

        {/* Code for match message */}
        <div className='match_message'style={message_state} >
          MATCH!
        </div>
        <div className = "match_locker" style={match_locker_state}></div>
        
        {/* Code for win menu */}
        <section className='win_message' style={win_state}>
          <img className = "winning_squid" src = {"assets/Squid_Happy.png"} width = "200" alt = {"Extra happy cartoonish green squid mascot"}  />
          <div className='winning_text'>
            CONGRATS! You've won! Great job studying!
          </div>
          <div className='winning_button_holder'>
            <a href="#/menupage"><button className='back_to_menu_button' aria-label = "Back to menu button">Return to Menu</button></a>
          </div>
        </section>

      </article>

    );
  }
}

export default KanjiGamePage;


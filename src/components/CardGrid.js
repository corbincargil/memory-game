import selectDeck from '../util/selectDeck';
import shuffle from '../util/shuffle';
import { useState, useEffect } from 'react';

export default function CardGrid(props) {
    const { hiScore, setHiScore, score, setScore, round, setRound } = props;
    const [cards, setCards] = useState(selectDeck(round));

    let currentCard;

    const resetGame = () => {
        if (score > hiScore) {
            setHiScore(score);
        }
        setScore(0);
        setRound(1);
        setCards(selectDeck(1));
        cards.map((card) => (card.counter=0));
    }

    const updateScore = () => {
        setScore(prevScore => prevScore + 1);
    }

    const updateRound = (round) => {
        setRound(prevRound => prevRound + 1);
        setCards((prevCards) => prevCards.concat(...selectDeck(round)));
    }

    const updateCounter = (card) => {
        card.counter++;
    }


    function handleClick(e) {

        cards.forEach((card) => {
            if (card.id == e.currentTarget.id) {
            currentCard = card;
            }
        })
        currentCard.counter++;

        if (currentCard.counter > 1) {
            resetGame();
            return;
        }

        updateScore();
        setCards(shuffle(cards));
    }

    useEffect(() => {
        if (round == 1 && score == 5) {updateRound(2)}
        if (round == 2 && score == 10) {updateRound(3)}
        if (round == 3 && score == 15) {updateRound(4)}
        if (round == 4 && score == 20) {updateRound(5)}
        if (round == 5 && score == 25) {updateRound(6)}
        if (round == 6 && score == 30) {} //Add gameWin modal

    })
    
    
    return(
        <div className="card-grid">
            <ul>
            {
                cards.map((card) => (
                    <li 
                        className='card' 
                        key={card.id}
                        id={card.id}
                        onClick={handleClick}>
                        <img src={card.pic} alt={card.name}/>
                        <p>{card.name}</p>
                        {/* <p>{card.counter}</p> */}
                    </li>
                ))
            }
            </ul>

        </div>
    )
}
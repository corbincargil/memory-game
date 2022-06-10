import selectDeck from '../util/selectDeck';
import shuffle from '../util/shuffle';
import { useState, useEffect } from 'react';

export default function CardGrid(props) {
    const { hiScore, setHiScore, score, setScore, round, setRound } = props;
    const [cards, setCards] = useState(selectDeck(round));

    let prevRound = 1;
    let currentCard;
    let currentCounter;


    const resetGame = () => {
        console.log('reset gammmmee');
        if (score > hiScore) {
            setHiScore(score);
        }
        setScore(0);
        setRound(1);
        cards.map((card) => (card.counter=0));
    }

    const updateScore = () => {
        setScore(score + 1);
    }

    //need to fix bug where the updated deck and displayed round are delayed
    const updateRound = () => {
        if (round == 1 && score > 8) {setRound(round+1);}
        if (round == 2 && score > 13) {setRound(round+1);}
        if (round == 3 && score > 18) {setRound(round+1);}
        if (round == 4 && score > 23) {setRound(round+1);}
    }
    const getCounter = (card) => {
        if (card.id == currentCard) {
            currentCounter = card.counter
        }
        return currentCounter;
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
        console.log(currentCard);

        updateCounter(currentCard);


        if (currentCard.counter > 1) {
            resetGame();
            return;
        } else {
            updateScore();
            updateRound();
        }

        

        setCards(shuffle(cards));
        console.log(cards);
        prevRound = round;
    }

    useEffect(() => {
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
                        <p>{card.counter}</p>
                    </li>
                ))
            }
            </ul>

        </div>
    )
}
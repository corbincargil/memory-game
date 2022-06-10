import selectDeck from '../util/selectDeck';
import shuffle from '../util/shuffle';
import { useState, useEffect } from 'react';
import{
    deckOne,
    deckTwo,
    deckThree,
    deckFour,
    deckFive
} from '../util/cards';

export default function CardGrid(props) {
    const { hiScore, setHiScore, score, setScore, round, setRound } = props;
    const [cards, setCards] = useState(selectDeck(round));
    //const [currentCard, setCurrentCard] = useState();

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
        setScore(prevScore => prevScore + 1);
    }

    //need to fix bug where the updated deck and displayed round are delayed
    const updateRound = () => {
        setRound(prevRound => prevRound + 1);
        setCards((prevCards) => prevCards.concat(...selectDeck(round+1)));
        // if (round == 1 && score > 5) {
        //     setRound(prevRound => prevRound+1);
        //     setCards((prevCards) => prevCards.concat(deckTwo));
        // }
        // if (round == 2 && score > 12) {setRound(round+1);}
        // if (round == 3 && score > 18) {setRound(round+1);}
        // if (round == 4 && score > 23) {setRound(round+1);}
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
        }

        updateScore();
        
        
            //updateRound();
        

        

        setCards(shuffle(cards));
        console.log(cards);
        //prevRound = round;
        //setRound(round);
    }

    useEffect(() => {
        if (round == 1 && score == 5) {updateRound()}
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
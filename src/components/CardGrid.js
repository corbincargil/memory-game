import selectDeck from '../util/selectDeck';

export default function CardGrid(props) {
    let score = props.score;
    let round = props.round;
    let cards = selectDeck(round);
    let prevRound;

    function handleClick(e) {
        e.currentTarget.value++;
        if (e.currentTarget.value > 1) {
            console.log('reset gammmmee');
        } else {score++;}
        if (round == 1 && score > 9) { round++;}
        if (round == 2 && score > 14) {round++;}
        if (round == 3 && score > 19) {round++;}
        if (round == 4 && score > 24) {round++;}
        console.log(score);
        console.log(round);
        if (round > prevRound){
            selectDeck(round);
            console.log('new deck selected');
        }
        prevRound = round;
        console.log('shuffle and re-render deck here')
    }

    return(
        <div className="card-grid">
            <ul>
            {
                cards.map((card) => (
                    <li 
                        className='card' 
                        key={card.id}
                        onClick={handleClick}>
                        <img src={card.pic} alt={card.name}/>
                        <p>{card.name}</p>
                    </li>
                ))
            }
            </ul>

        </div>
    )
}
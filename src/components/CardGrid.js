import cards from '../util/cards';
import shuffle from '../util/shuffle';

export default function CardGrid(props) {
    const score = props.score;
    const round = props.round;

    return(
        <div className="card-grid">
            <ul>
            {
                cards.map((card) => (
                    <li className='card' key={card.id}>
                        <img src={card.pic} alt={card.name} />
                        <p>{card.name}</p>
                    </li>
                ))
            }
            </ul>

        </div>
    )
}
import cards from '../util/Cards';

export default function CardGrid(props) {
    return(
        <div className="card-grid">
            <ul>
            {
                cards.map((card) => (
                    <li className='card'>
                        <img src={card.pic} alt={card.name} />
                        <p>{card.name}</p>
                    </li>
                ))
            }
            </ul>

        </div>
    )
}
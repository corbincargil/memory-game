import cards from '../util/Cards';

export default function CardGrid(props) {
    return(
        <div className="card-grid">
            <ul>
            {
                cards.forEach(() => {
                    <li>
                        <img src={cards[0].pic} alt={cards[0].name} />
                        <p>{cards[0].name}</p>
                    </li>
                })
            }
                <li>
                    <img src={require("../characters/hank.webp")} alt="" />
                    <p>Hank Schrader</p>
                </li>
                <li>
                    <img src={cards[0].pic} alt={cards[0].name} />
                    <p>{cards[0].name}</p>
                </li>
            </ul>

        </div>
    )
}
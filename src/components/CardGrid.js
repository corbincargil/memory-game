

export default function CardGrid(props) {
    return(
        <div className="card-grid">
            <ul>{
             // card info displayed as line item <li/>
             <li>
                <img src={require("../characters/hank.webp")} alt="" />
                <p>Hank Schrader</p>
            </li>
            }</ul>

        </div>
    )
}
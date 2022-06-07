

export default function Scores(props) {


    return(
        <div className="scores-container">
            <h3>Hi-Score: {props.hiScore}</h3>
            <h3>Round Number: {props.round}</h3>
            <h3>Current Score: {props.score}</h3>
        </div>
    )
}
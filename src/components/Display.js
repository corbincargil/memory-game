import CardGrid from './CardGrid.js';

export default function Display(props) {
    const score = props.score;
    const round = props.round;
    
    return(
        <div className="display">
            <h2>How many characters can you remember?</h2>
            <CardGrid round={round} score={score}/>
            <img id='logo' src={require("../img/logo-text.png")} alt="better-call-saul" />
        </div>
    )
}
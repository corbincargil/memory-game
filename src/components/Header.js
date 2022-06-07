
import Scores from "./Scores";

export default function Header(props) {
    const title = 'Memory Card Game'


    return(
        <div className="header">
            <h1>{title}</h1>
            <Scores 
                hiScore={props.hiScore} 
                round={props.round} 
                score={props.score}
            />
        </div>
    )
}
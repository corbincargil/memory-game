
import Scores from "./Scores";
import mainLogo from "../img/main-logo.svg";

export default function Header(props) {
    const title = 'Memory Card Game'


    return(
        <div className="header">
            <img src={mainLogo} alt="" />
            <h1>{title}</h1>
            <Scores 
                hiScore={props.hiScore} 
                round={props.round} 
                score={props.score}
            />
        </div>
    )
}
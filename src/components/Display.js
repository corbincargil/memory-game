import CardGrid from './CardGrid.js';

export default function Display(props) {

    return(
        <div className="display">
            <h2>How many characters can you remember?</h2>
            <CardGrid {...props}/>
            <img id='logo' src={require("../img/logo-text.png")} alt="better-call-saul" />
        </div>
    )
}
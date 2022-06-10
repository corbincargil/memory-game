import React, { useState , useEffect } from 'react';
import Header from "./Header.js";
import Display from './Display.js';


export default function Layout() {
    const [score, setScore] = useState(0)
    const [hiScore, setHiScore] = useState(0)
    const [round, setRound] = useState(1)


    return(
        <div id='main'>
            <Header hiScore={hiScore} round={round} score={score}/>
            <Display 
                hiScore={hiScore} 
                setHiScore={setHiScore}
                round={round} 
                setRound={setRound}
                score={score}
                setScore={setScore}
                />
            {/* <Footer /> */}
        </div>
    )
}
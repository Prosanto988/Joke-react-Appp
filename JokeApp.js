import React from "react";
import JockeData from "./JockeData";
import Jocks from "./Jocks";


export default function App2(){
    const jokeElement = JockeData.map(joke =>{
        return <Jocks setup={joke.setup} punchline={joke.punchline}/>
    })
    return(
        <div>
            {jokeElement}
        </div>
    )
}
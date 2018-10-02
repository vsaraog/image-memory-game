import React from "react"

const Navbar = props =>  (
    <nav className="navbar navbar-light bg-light" >
    <span className="navbar-text" onClick={props.resetGame}>
        Start
</span>
<span className="navbar-text">
        {props.currentScore > 0 ? "You guessed correctly" : "You guessed incorrectly"}
</span>
<span className="navbar-text">
        currentScore: {props.currentScore} | 
        topScore: {props.topScore}
</span>
</nav >
)

export default Navbar

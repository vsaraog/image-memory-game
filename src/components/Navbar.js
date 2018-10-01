import React from "react"

const Navbar = props =>  (
    <nav className="navbar navbar-light bg-light" >
    <span className="navbar-text">
        Start
</span>
<span className="navbar-text">
        {props.userMessage}
</span>
<span className="navbar-text">
        currentScore: {props.currentScore} | 
        topScore: {props.topScore}
</span>
</nav >
)

export default Navbar

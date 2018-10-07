import React, {Component} from "react"
import "./style.css"

class ImageCard extends Component {
    clicked = () => {
        this.props.buttonClicked(this.props.buttonId)
    }

    render() {
        return (    
            // <img src={this.props.link} alt="Famous USA female soccer players" onClick={this.clicked} />
            <div role="img" className="click-item" onClick={this.clicked} style={{backgroundImage: "url(" + this.props.link + ")"}}></div>
        )
    }
}

export default ImageCard
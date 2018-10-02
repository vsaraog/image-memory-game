import React, {Component} from "react"

class ImageCard extends Component {
    clicked() {
        this.props.buttonClicked(this.props.buttonId)
    }

    render() {
        return (    
            <img src={this.props.link} alt="Famous USA female soccer players" onClick={this.clicked.bind(this)} />
        )
    }
}

export default ImageCard
import React, {Component} from "react"

class ImageCard extends Component {
    state = {
        clickCount: 0
    }

    clicked() {
        console.log("button clicked")
        this.props.buttonClicked(this.props.buttonId)
        // this.setState({
        //     clickCount: this.state.clickCount + 1
        // }, () => {this.props.buttonClicked(this.state.clickCount)})
    }

    render() {
        return (    
            <button onClick={this.clicked.bind(this)}>{this.props.buttonText}</button>
        )
    }
}

export default ImageCard
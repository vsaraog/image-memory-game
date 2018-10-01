import React, {Component} from "react"
import ImageCard from "./ImageCard"

const friends = [
    { id: 1, text: "Button1" },
    { id: 2, text: "Button2" },
    { id: 3, text: "Button3" },
    { id: 4, text: "Button4" },
    { id: 5, text: "Button5" }
    ]

class ImageList extends Component {
    state = {
        topScore: 0,
        currentScore: 0,
        clickedButtons: []
    }

    reset() {
        this.setState({
            topScore: 0,
            clickedButtons: []
        })
    }

    randomNum(min, max, prec) {
        return (min + (Math.random() * (10 ** prec) / (10 ** prec) * (max - min))).toFixed(prec);
      }

    swap(arrayToSwap, i, j) {
        console.assert(i >= 0 && i < arrayToSwap.length)
        console.assert(j >= 0 && j < arrayToSwap.length)
        
        const val = arrayToSwap[i]
        arrayToSwap[i] = arrayToSwap[j]
        arrayToSwap[j] = val
    }

    randomizeButtons() {
        for (let i = 0; i < friends.length; ++i) {
            const y = this.randomNum(0, friends.length-1, 0)
            console.assert(y >= 0 && y < friends.length)
            this.swap(friends, i, y)
        }
    }

    buttonClicked(buttonId) {
        console.log(buttonId)
        this.randomizeButtons()

        let clickedBtns = this.state.clickedButtons
        const btnFound = clickedBtns && clickedBtns.findIndex( (elem) => elem === buttonId) !== -1

        let lTopScore = this.state.topScore
        if (btnFound) {
            clickedBtns = []
        } 
        else {
            // VIK_QUESTION: How to not set value directly of member
            clickedBtns.push(buttonId)
            if (clickedBtns.length > lTopScore) {
                lTopScore = clickedBtns.length
            }
        }

        this.setState({
            clickedButtons: clickedBtns,
            topScore: lTopScore
        }, () => {
            const currentScore = this.state.clickedButtons.length
            console.log("Current Score:", currentScore, "Top Score:", this.state.topScore)
            this.props.imageClicked({currentScore: currentScore, topScore: this.state.topScore})
        })
    }

    render() {
        return (
        friends.map(elem => {
            return <ImageCard buttonText={elem.text} buttonId={elem.id} buttonClicked={this.buttonClicked.bind(this)}/>
        })
    )
    }
}

export default ImageList
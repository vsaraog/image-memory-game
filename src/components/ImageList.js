import React, {Component} from "react"
import ImageCard from "./ImageCard"

const images = [
    { id: 1, link: "assets/img/abby-wambach.jpeg" },
    { id: 2, link: "assets/img/alex-morgan.jpeg" },
    { id: 3, link: "assets/img/brandi-chastain.jpeg" },
    { id: 4, link: "assets/img/carli-lloyd.jpeg" },
    { id: 5, link: "assets/img/kristine-lilly.jpeg" },
    { id: 6, link: "assets/img/mia-hamm.jpeg" },
    { id: 7, link: "assets/img/michelle-akers.jpeg" },
    { id: 8, link: "assets/img/becky-sauerbrunn.jpeg" },
    { id: 9, link: "assets/img/christie-pearce.jpeg" },
    { id: 10, link: "assets/img/hope-solo.jpeg" },
    { id: 11, link: "assets/img/julie-foudy.jpeg" },
    { id: 12, link: "assets/img/megan-rapinoe.jpeg" },
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

    shuffleButtons() {
        for (let i = 0; i < images.length; ++i) {
            const y = this.randomNum(0, images.length-1, 0)
            console.assert(y >= 0 && y < images.length)
            this.swap(images, i, y)
        }
    }

    buttonClicked(buttonId) {
        console.log(buttonId)
        this.shuffleButtons()

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
        images.map(elem => {
            return <ImageCard link={elem.link} buttonId={elem.id} buttonClicked={this.buttonClicked.bind(this)}/>
        })
    )
    }
}

export default ImageList
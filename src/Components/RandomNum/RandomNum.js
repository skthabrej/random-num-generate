import { Component } from "react";
import './RandomNum.css'

class RandomNum extends Component {
    state = {randomNumber: 0}

  onChangeButton = () => {
    this.setState(() => ({
      randomNumber: Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="card-1">
          <h1 className="heading-1">Random Number</h1>
          <p className="paragraph-1">
            Generate a random number in the range of 0 to 100
          </p>
          <div className="btn-container">
            <button className="btn-style" onClick={this.onChangeButton}>
              Generate
            </button>
          </div>
          <p className="random-number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNum
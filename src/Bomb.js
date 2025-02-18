import React, {Component} from 'react';
import ImageSlider from './ImageSlider';

class Bomb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    
    render() {
        if (this.state.secondsLeft !== 0) {
            return(
                <h2>{`${this.state.secondsLeft} seconds left before I go boom!`}</h2>
            )
        }
        else {
            return(
                <h2>Boom!</h2>
            )
        }
    }
  
}

export default Bomb

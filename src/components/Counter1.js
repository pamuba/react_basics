import React, { Component } from 'react'

class Counter1 extends Component {

    constructor(props) {
        super()
    
        this.state = {
             count:10
        }
    }
    incrementCount = () => {
        this.setState(prevState => {
            return {count:prevState.count + 1}
        })
    }

    render() {
        return (
            <div>
                {this.props.children(this.state.count, this.incrementCount)}
            </div>
        )
    }
}

export default Counter1

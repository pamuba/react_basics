import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

class ParentComp extends Component {
    constructor(props) {
        super()
    
        this.state = {
            name:"React" 
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"React"
            })
        },2000)
    }
    render() {
        console.log('**********************Parent Component****************')
        return (
            <div>
                Parent Component
                <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentComp
import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super()
    
        this.state = {
             name:'React'
        }
        console.log('LifeCycleB constructor')
    }
    static getDerivedStateFromProps(props, state){
        //returns new state or null
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleB componentDidMount')
    }
    
    render() {
        console.log('LifeCycleB render')
        return (
            <div>
                
            </div>
        )
    }
}

export default LifeCycleB

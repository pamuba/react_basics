import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifecycleA extends Component {
    constructor(props) {
        super()
    
        this.state = {
             name:'React'
        }
        console.log('LifeCycleA constructor')
    }
    static getDerivedStateFromProps(props, state){
        //returns new state or null
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }
    
    render() {
        console.log('LifeCycleA render')
        return (
            <div>
                <LifeCycleB></LifeCycleB>
            </div>
        )
    }
}

export default LifecycleA

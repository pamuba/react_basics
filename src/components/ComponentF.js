import React, { Component } from 'react'
import { UserConsumer } from './userContext'
 class ComponentF extends Component {
    render() {
        return (
           <UserConsumer>
               {
                   (val) => {
                       return <div>Content: {val} </div>
                   }
               }
           </UserConsumer>
        )
    }
}

export default ComponentF

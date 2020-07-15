import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super()
        this.inputRef = React.createRef()
        
        //callbacback refs
        this.cbRef = null;
        this.setCbRef = element => {
            this.cbRef = element
        }


    
        this.state = {
            
        }
    }

    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus();
        }
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }
    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <input ref={this.inputRef} type="text" />
                <input ref={this.setCbRef} type="text" />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo

import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super();

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    // if(this.state.isLoggedIn){
    //     return (
    //         <div>
    //             Welcome John
    //         </div>
    //     )
    // }
    // else{
    //     return (
    //         <div>
    //             Welcome Guest
    //         </div>
    //     )
    // }

    return (
      <div>
        {this.state.isLoggedIn && <div>welcome john</div>}
        {!this.state.isLoggedIn && <div> Welcome Guest</div>}
      </div>
    );
  }
}

export default UserGreeting;

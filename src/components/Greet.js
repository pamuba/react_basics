import React from "react";

function Greet(props) {
//   console.log(props);
//   props.name = "new Name"
  return (
    <React.Fragment>
     
        <div>
          Hello {props.name} a.k.a {props.heroName}
          {React.Children.toArray(props.children)[0]}<br />
          {React.Children.toArray(props.children)[1]}
        </div>
     
    </React.Fragment>
  );

  // return React.createElement('div', {id:'hello', className:'dummy'}, React.createElement('h1',null,'Hello World'));
  // return React.createElement('div',{id:'hello', className:'dummy'},React.createElement('h1',null , 'Hello World'));
  // return React.createElement("div", null, <h1>hello</h1>);
  // return React.createElement('div', {id:'hello', className:'dummy'}, React.createElement('h1',null,'Hello World'));
}

// const Greet = () =>  <h1>Hello React</h1>

export default Greet;

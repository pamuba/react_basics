import React from "react";

function Greet({name, heroName}) {
//   console.log(props);
//   props.name = "new Name"
  return (
    <>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
    </>
  );

  // return React.createElement('div', {id:'hello', className:'dummy'}, React.createElement('h1',null,'Hello World'));
  // return React.createElement('div',{id:'hello', className:'dummy'},React.createElement('h1',null , 'Hello World'));
  // return React.createElement("div", null, <h1>hello</h1>);
  // return React.createElement('div', {id:'hello', className:'dummy'}, React.createElement('h1',null,'Hello World'));
}

// const Greet = () =>  <h1>Hello React</h1>

export default Greet;

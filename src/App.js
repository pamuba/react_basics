import React from 'react';
import logo from './logo.svg';
import './App.css';

import Random from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message';
import Counter from './components/Counter';
import Greet from './components/Greet';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';


function App() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div className="App">
    <NameList numbers={numbers}></NameList>

    {/* <UserGreeting></UserGreeting> */}

   {/* <ParentComponent></ParentComponent> */}

    {/* <EventBind></EventBind> */}

    {/* <Greet name="Diana" heroName="Wonder Women"></Greet> */}

    {/* <Counter></Counter> */}


    {/* <Message></Message> */}

      {/* <Random name="Bruce" heroName="Batman">
        <p>This is childern props</p>
        <p>This is 2nd childern props</p>
      </Random> */}
      {/* <Random name="Clark" heroName="SuperMan">
        <button>CLICK</button>
      </Random>
      <Random name="Diana" heroName="Wonder Women"></Random>

      <Welcome name="Bruce" heroName="Batman"></Welcome>
      <Welcome name="Clark" heroName="SuperMan"></Welcome>
      <Welcome name="BruDianace" heroName="Wonder Women"></Welcome> */}
    </div>
  );
}

export default App;

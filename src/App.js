import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Random from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Greet from "./components/Greet";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Form from "./components/Form";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import LifecycleA from "./components/LifecycleA";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounerTwo from "./components/ClickCounerTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import Counter1 from "./components/Counter1";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/userContext";
import HookCounter from "./components/HookCounter";

function App() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div className="App">

     <HookCounter></HookCounter>

     {/* <UserProvider value="Hello World">
      <ComponentC />
     </UserProvider> */}

      {/* <Counter1>
        {(count, incrementCount) => <ClickCounerTwo count={count} 
        incrementCount={incrementCount}></ClickCounerTwo>}
      </Counter1>

      <Counter1> 
        {(count, incrementCount) => <HoverCounterTwo count={count} 
        incrementCount={incrementCount}></HoverCounterTwo>}
      </Counter1> */}

      {/* <ClickCounerTwo></ClickCounerTwo>
      <HoverCounterTwo></HoverCounterTwo>
      <User render={(isLoggedIn) => isLoggedIn ? 'Will':'Guest'}></User> */}
      {/* <ClickCounter></ClickCounter> */}
      {/* <HoverCounter></HoverCounter> */}

      {/* <LifecycleA></LifecycleA> */}

      {/* <RefsDemo></RefsDemo> */}
      {/* <ParentComp></ParentComp> */}

      {/* <Form></Form> */}
      {/* <NameList numbers={numbers}></NameList> */}

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

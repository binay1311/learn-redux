import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, signIn} from "./actions";

function App() {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();

  return (
    <div className="App">
        <h1>Counter {counter}</h1>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        {isLogged ?
            (
                <div>
                <button onClick={() => dispatch(signIn())}>Sign Out</button>
                <h3>Logged In</h3>
                    <p>Only visible if logged in</p>
                </div>
            )
            :
            (
                <div>
                    <button onClick={() => dispatch(signIn())}>Sign In</button>
                    <h3>Logged Out</h3>
                </div>
            )
        }
    </div>
  );
}

export default App;

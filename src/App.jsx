import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/slices/counterSlice";
export default function App() {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch();
  return (
    <div className="App" style={{display:"flex",flexDirection:"column",width:"50%"}}>
          Hi this is a Counter
          <button onClick={()=>dispatch(decrement())}>
            Decrement
          </button>
          <span style={{width:"100%",textAlign:"center"}}>{count}</span>
          <button onClick={()=>dispatch(increment())}>
            Increment
          </button>
    </div>
  );
}
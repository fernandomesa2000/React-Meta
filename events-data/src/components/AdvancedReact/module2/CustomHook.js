import { useState } from "react";
import useConsoleLog from "./UseConsoleLog";

function CustomHook() {
 const [count, setCount] = useState(0);
  useConsoleLog(count);

 function increment() {
    setCount(prevCount => prevCount + 1);
 }

 return (
 <div>
    <h1>Count: {count}</h1>
    <button onClick={increment}>Plus 1</button>
 </div>
 );
}

export default CustomHook;
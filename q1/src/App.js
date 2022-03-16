import { useEffect,useState,useRef,useCallback } from "react";
import Button from "./Button";
import Title from "./Title";
/**
 * you should use useRef, useCallback, memo, useState.
 * don't remove console logs,
 * check console before and after your chnages
 */
function App() {
  console.log("App is rendering...");
  useEffect(() => console.log("== App rendered =="));
  const [value1,setValue1]=useState(0)
  const [value2,setValue2]=useState(0)
  const inputElement1 = useRef("");
  const inputElement2 = useRef("");
  
  /**
   * create two states called value1 and value 2
   */

  /**
   * create ref for each input (ref1, ref2) and pass them to input elements
   */


  const changeValue1 = useCallback(() => {
    /**
     * get value of input from ref and set first state
     */
    
    setValue1(inputElement1.current.value)
  },[value1]);
  const changeValue2 = useCallback(() => {
    /**
     * get value of input from ref and set second state
     */
    setValue2(inputElement2.current.value)
  },[value2]);
  return (
    <div className="App">
      <div className="value-1">
        first value: <Title>{value1}</Title>
        <br />
        change first value:
        <input type="text" ref={inputElement1} />
        <Button onClick={changeValue1}> change </Button>
      </div>
      <div className="value-2">
        second value: <Title>{value2}</Title>
        <br />
        change second value:
        <input type="text" ref={inputElement2}/>
        <Button onClick={changeValue2}> change </Button>
      </div>
    </div>
  );
}
export default App;

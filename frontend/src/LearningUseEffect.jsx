import React, { useEffect, useState } from "react";

const LearningUseEffect = () => {
  const [number, setNumber] = useState(0);

  function increaseNumber() {
    setNumber(number + 1);
  }

  useEffect(()=>{
    console.log(`useEffect Triggred`);
    
  },[number])
  return (
    <>
      <h1>I am learning useEffect Hook today</h1>
      <h1>{number}</h1>
      <button onClick={increaseNumber}>+</button>
    </>
  );
};

export default LearningUseEffect;

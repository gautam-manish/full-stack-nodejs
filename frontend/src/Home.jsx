import { useState } from 'react'

const Home = () => {
    const [number, setNumber] = useState(0)
    function increaseMeroNumber(){
        setNumber(number + 1)
    }
    function decreaseMeroNumber(){
        setNumber(number - 1)
    }
  return (
    <>
        <h1>{number}</h1>
        <button onClick={increaseMeroNumber}>+</button>
        <button onClick={decreaseMeroNumber}>-</button>
    
    </>
  )
}

export default Home
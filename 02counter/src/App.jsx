import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // let counter = 15;
  const [counter, setCounter] = useState(15)

  const addValue = () => {
    // counter = counter + 1; aise update nahi hoga ui mai

    setCounter(counter+1)

    //! Interview question agar hum dher saari setCounter daal de toh kya hoga - 1 value hi baregi .Actually useState batches mai bhej ta hai .To woh dekhega ki same toh update ho raha hai .Uske liye previous state ka access bohot zaruri hai
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)

    // Solution 
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    //abb hoga ki ek click pe 15 se sidha 19 hoga because humare pas previous value ka access hai

    console.log("clicked" , counter) //! counter is working on the console but not getting updated in the UI . Toh react ne bola ki agar UI mai kuch update karna hai toh "hooks " ke through hi woh update hoga .
  }; 

  const removeValue = () => {

    if(counter !== 0){
    setCounter(counter - 1)
    }
  }


  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>

      <button
      onClick={addValue} //! There is no need to call the function here .WE just have to give the reference of the function 
      >Add Value {counter}</button>
      <br />
      <button
        onClick={removeValue}
      >remove value {counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App

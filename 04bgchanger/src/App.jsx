import { useState } from "react"


function App() {
  const [color, setColor] = useState("")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")} //yaha pe agar mai direct setColor lagata toh direct hi ⁡⁢⁣⁢function call ho ⁡jata .O͟n c͟l͟i͟c͟k k͟o e͟k f͟u͟n͟c͟t͟i͟o͟n c͟h͟a͟h͟i͟y͟e h͟o͟t͟a h͟a͟i..Isi lye humne ek call back liya aur 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"red"}}
          >Red</button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"green"}}
          >Green</button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"blue"}}
          >Blue</button>
          <button
            onClick={() => setColor("Lavender")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"#dadada"}}
          >Lavender</button>
        </div>
      </div>

      </div>
    </>
  )
}

export default App

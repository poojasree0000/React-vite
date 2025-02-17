
import React from 'react'
import './App.css'
import Comp1 from './Comp1'

function App() {
  const myInfo={
    name1:"Poojasree:)",
    age1: 18,
    roll1: "sec23cj032",
    dept1: "M.Tech CSE"
  }
  const friendInfo={
    name2:"Keerthana:)",
    age2:18,
    roll2: "sec23cj001",
    dept2: "M.Tech CSE"
  }
  

return (

    <>
    <h1 style={{textAlign:"center",color:"purple"}}>Besties Forever</h1>
    <br />

    <div>
    <h1 style={{textAlign:"center",color:"purple",fontStyle:"Romans"}}>Me</h1>
    <Comp1  name1={myInfo.name1} age1={myInfo.age1} roll1={myInfo.roll1} dept1={myInfo.dept1} />
    <h1 style={{textAlign:"center",color:"purple",fontStyle:"Romans"}}>She</h1>
    <Comp1  name2={friendInfo.name2} age2={friendInfo.age2} roll2={friendInfo.roll2} dept2={friendInfo.dept2} />
    </div>


    <button onClick={()=>alert("click is clicked")}> One click</button>
    <button onDoubleClick={()=>alert("click is Double clicked")}>Double click</button>
    </>
  )
}
export default App


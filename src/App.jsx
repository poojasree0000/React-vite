import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    alert("Hello! Connections");
  }, []);

  const person = {
    fullName: "Pooja S",
    years: 18,
  };

  console.log("Years: " + person.years);

  function greetMorning() {
    console.log("Hello Pooja, Good Morning!");
  }

  const greetAfternoon = () => {
    console.log("Hello Pooja, Good Afternoon!");
  };

  return (
    <>
      <div className="info">
        <h1>Full Name: {person.fullName}</h1>
        <h1>Years: {person.years}</h1>
      </div>
      <div>
        <button onClick={greetMorning}>Click for Morning Greeting</button>
        <button onClick={greetAfternoon}>Click for Afternoon Greeting</button>
        <button onClick={() => console.log("Hello Pooja, Good Night!")}>
          Click for Night Greeting
        </button>
      </div>
    </>
  );
}

export default App;

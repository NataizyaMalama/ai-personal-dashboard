import "./App.css";
import { useState, useEffect } from "react";
import Goal from "./Goal";

function App() {


  const [goal, setGoal] = useState("");

  const [goals, setGoals] = useState(() => {

    const savedGoals = localStorage.getItem("goals");

    return savedGoals ? JSON.parse(savedGoals) : [];

});

useEffect(() => {

    localStorage.setItem(
        "goals",
        JSON.stringify(goals)
    );

}, [goals]);



  function addGoal() {

    if (goal.trim() === "") return;


    setGoals([...goals, goal]);

    setGoal("");

}

function deleteGoal(index) {

    const updatedGoals = goals.filter((_, i) => i !== index);

    setGoals(updatedGoals);

}

  return (

    <div className="container">


      <div className="card">


        <h1>AI Personal Dashboard</h1>


        <p>Your personal AI assistant.</p>


        <h2>My Goals</h2>


        <input

    value={goal}

    onChange={(e) => setGoal(e.target.value)}

    onKeyDown={(e) => {

        if (e.key === "Enter") {

            addGoal();

        }

    }}

    placeholder="Enter a goal"

/>


        <button onClick={addGoal}>
          Add Goal
        </button>



        <ul>

          {goals.map((item, index) => (

            <Goal

    key={index}

    text={item}

    removeGoal={() => deleteGoal(index)}

/>

          ))}


        </ul>


      </div>


    </div>

  )

}


export default App
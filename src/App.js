import React, { useState } from "react";
import "./App.css";
import AddNotes from "./Components/AddNotes";
import Header from "./Components/Header";
import ListNote from "./Components/ListNote";

function App() {
  const [taskList, setTaskList] = useState([
    { name: "task1", isComplete: "false" },
  ]);

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = { name: e.target[0].value, isComplete: "false" };
    e.target[0].value ="";
    setTaskList([...taskList, newTask]);
  }

  function completeTaskHandler(index) {
    console.log(index)
    taskList[index].isComplete = "true";
    setTaskList([...taskList]);
    
  }

  return (
    <div className="App">
      <Header taskList={taskList} />
      <AddNotes submitHandler={handleSubmit} />
      <ListNote taskList={taskList} completeTaskHandler={completeTaskHandler} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import './App.css';
import AddNotes from "./Components/AddNotes";
import Header from "./Components/Header";
import ListNote from "./Components/ListNote";

function App() {

  const [taskList, setTaskList] = useState([{name:"task1",isComplete:"false"}]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target[0].value) ;
    const newTask = {name:e.target[0].value,isComplete:"false"}
    setTaskList([...taskList, newTask]);
  }

  return (
    <div className="App">
       <Header />
       <AddNotes  submitHandler={handleSubmit}/>
       <ListNote taskList={taskList}/>
    </div>
  );
}

export default App;

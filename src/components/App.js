import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState('All')

  const deleteTask = (text) => {
    //slice up the new array
    const newTasks = tasks.filter((el, i) => {
      return el.text !== text
    })
    setTasks(newTasks)
  }

  
    function addTask(newTask) {
      setTasks([...tasks, newTask]);
    }
    
    function updateCategory(newCategory) {
      setCategory(newCategory);
    }
    

  const filteredTasks = tasks.filter((el, i) => {
    
    return (category === 'All' || category === el.category)
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter category={category} updateCategory={updateCategory} categories={CATEGORIES} />
      <NewTaskForm addTask={addTask} categories={CATEGORIES} />
      <TaskList tasks={filteredTasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
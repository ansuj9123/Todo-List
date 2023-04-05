import React, {useState} from "react";



const Home = () => {

    const [todoList, setTodoList] = useState([]);
    const [currentTask, setCurrentTask] = useState("");

    const addTask=()=>{
        setTodoList([...todoList, currentTask])
       
    }   

  return (
    <div>
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Task..."
          onChange={(event) => {
            setCurrentTask(event.target.value);
          }}
        />
        {/* {currentTask} */}
        <button onClick={addTask}>Add Task</button>
      </div>
      <hr />
      <ul>
        {todoList.map((val, key) => {
          return <li className="list" key={key}> {val}</li>;
        })}
      </ul>
    </div>
  );
}

export default Home
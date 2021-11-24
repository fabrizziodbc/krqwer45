/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

import React, { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Sacar la ropa", done: false },
    { id: 2, name: "Hacer la cama", done: true },
    { id: 3, name: "Leer un rato", done: false },
  ]);
  const [newTask, setnewTask] = useState("");
  const [error, setError] = useState(false);

  const newTaskHandler = (e) => {
    setError(false);
    setnewTask(e.target.value);
    e.target.value = "";
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      setTasks([
        ...tasks,
        {
          id: tasks.length + 1,
          name: newTask,
          done: false,
        },
      ]);
      setnewTask("");
    } else {
      setError(true);
    }
  };
  const removeHandler = (e) => {
    setTasks(tasks.filter((i) => i.id !== parseInt(e.target.id, 0)));
  };

  const toggleHandler = (e) => {
    const target = tasks.find((i) => i.id === parseInt(e.target.id, 0));
    const targetIndex = tasks.indexOf(target);
    let arrCopy = [...tasks];
    arrCopy[targetIndex].done = !arrCopy[targetIndex].done;
    setTasks(arrCopy);
  };
  return (
    <div className="wrapper">
      <div className="list">
        <h3>Por hacer:</h3>
        <ul className="todo">
          {tasks.map((task) => (
            <li key={task.id}>
              <span
                className={`${task.done ? "done" : ""}`}
                id={task.id}
                onClick={toggleHandler}
              >
                {task.name}
              </span>
              <button onClick={removeHandler} id={task.id}>
                x
              </button>
            </li>
          ))}
        </ul>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            id="new-task"
            placeholder="Ingresa una tarea y oprime Enter"
            value={newTask}
            onChange={newTaskHandler}
            className={`${error ? "error" : ""}`}
          />
        </form>
      </div>
    </div>
  );
};

export default App;

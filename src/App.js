/* import React, { Component } from "react";

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, name: "Sacar la ropa", done: false },
        { id: 2, name: "Hacer la cama", done: true },
        { id: 3, name: "Leer un rato", done: false },
      ],
      newTask: "",
      error: false,
    };
  }
  newTaskHandler = (e) => {
    this.setState({
      error: false,
      newTask: e.target.value,
    });
    e.target.value = "";
  };
  submitHandler = (e) => {
    e.preventDefault();
    if (this.state.newTask.trim() !== "") {
      this.setState({
        tasks: [
          ...this.state.tasks,
          {
            id: this.state.tasks.length + 1,
            name: this.state.newTask,
            done: false,
          },
        ],
        newTask: "",
      });
    }
    this.setState({ error: true });
  };
  toggleHandler = (e) => {
    const target = this.state.tasks.find((i) => i.id == e.target.id);
    const targetDone = target.done;
    this.setState({
      task: [(target.done = !targetDone), ...this.state.tasks],
    });
  };
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task) => (
              <li
                className={`${task.done ? "done" : ""}`}
                key={task.id}
                id={task.id}
                onClick={this.toggleHandler}
              >
                {task.name}
              </li>
            ))}
          </ul>
          <form onSubmit={this.submitHandler}>
            <input
              type="text"
              id="new-task"
              placeholder="Ingresa una tarea y oprime Enter"
              value={this.state.newTask}
              onChange={this.newTaskHandler}
              className={`${this.state.error ? "error" : ""}`}
            />
          </form>
        </div>
      </div>
    );
  }
} */

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

  const toggleHandler = (e) => {
    const target = tasks.find((i) => i.id == e.target.id);
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
            <li
              className={`${task.done ? "done" : ""}`}
              key={task.id}
              id={task.id}
              onClick={toggleHandler}
            >
              {task.name}
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

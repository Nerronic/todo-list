import React from "react";
import './App.css';
import FilterButton from "./components/FilterButton.jsx";
import Form from './components/Form.jsx';
import Todo from "./components/Todo.jsx";
// Need to be in .jsx format if weorking in VITE

function App(props) {
  // const [count, setCount] = useState(0)
  const taskList = props.tasks.map((task) => (
    <Todo id={task.id} name={task.name} completed={task.completed} key={task.id} />
    ));
    //always pass a unique key to anything you render with iteration.
    function addTask(name){
      alert(name)
    }   //creates multiple tasks using .map function 
    return (
  <div className="todoapp stack-large">
  <h1>TodoMatic</h1>
 
  <Form addTask={addTask} />
  <div className="filters btn-group stack-exception">
    <FilterButton/>
    <FilterButton/>
    <FilterButton/>
  </div>
  <h2 id="list-heading">3 tasks remaining</h2>
  <ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading"> 
  {taskList}
  <Todo name="Eat" completed={true} id="todo-0" />
<Todo name="Sleep" completed={false} id="todo-1"/>
<Todo name="Repeat" completed={false} id="todo-2"/>
</ul>
</div>
);
}

export default App

import { useContext } from "react";
import TodoContext from "../Context/TodoContext";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useContext(TodoContext);
  let todos = tasks.map((task) => {
    return (
      <Task
        key={task.id}
        id={task._id}
        content={task.content}
        status={task.status}
      />
    );
  });

  return (
    <div className="tasks-container">
      {todos.length > 0 ? todos : <p className="emptyList">No todos yet</p>}
    </div>
  );
};

export default TaskList;

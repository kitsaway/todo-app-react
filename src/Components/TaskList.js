import { useContext } from "react";
import TodoContext from "../Context/TodoContext";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useContext(TodoContext);
  console.log('tasks', tasks)
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

  return <div className="tasks-container">{todos}</div>;
};

export default TaskList;

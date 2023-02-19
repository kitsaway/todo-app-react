import { createContext, useState, useEffect } from "react";
import API from "../Api/axiosApi";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(0);

  const getTasks = async () => {
    await API.getTasks().then((res) => setTasks([...res.todoTasks]));
  };

  const getCount = async () => {
    await API.getTasks().then((res) => setCount(res.count));
  };

  const handleAddTask = async (taskForm) => {
    await API.createTasks(taskForm).then((res) => {
      setTasks([...tasks, res.task]);
    });
    getCount();
  };

  const handleEdit = async (id, newContent) => {
    let taskList = [...tasks];
    if (newContent.length > 0) {
      const response = await API.updateTask(id, newContent);
      setTasks(
        taskList.map((task) => {
          if (task._id === response.task._id) {
            task.content = response.task.content;
          }
          return task;
        })
      );
    } else {
      alert("Update what needs to be done");
    }
  };

  const handleChange = async (id, status) => {
    let tasksList = [...tasks];
    const response = await API.updateStatus(id, status);
    setTasks(
      tasksList.map((task) => {
        if (task._id === response.task._id) {
          task.status = response.task.status;
          task.filter = response.task.filter;
        }
        return task;
      })
    );
    getCount();
  };

  const handleDelete = async (id) => {
    let tasksList = [...tasks];
    const response = await API.deleteTask(id);
    setTasks(tasksList.filter((task) => task.id !== response.id));
    getCount();
  };

  const handleCheckAll = () => {
    const tasksList = [...tasks];
    tasksList.map(async (task) => {
      let status = task.status;
      await API.checkAll(status).then((res) => {
        getTasks();
        getCount();
      });
    });
  };

  const handleClear = async () => {
    const tasksList = [...tasks];
    await API.clearCompleted();
    setTasks(tasksList.filter((task) => task.filter !== "completed"));
    getCount();
  };

  const handleViewAll = async () => {
    const response = await API.filterTasks("all");
    setTasks([...response]);
  };

  const handleViewActive = async () => {
    const response = await API.filterTasks("active");
    setTasks([...response]);
  };

  const handleViewCompleted = async () => {
    const response = await API.filterTasks("completed");
    setTasks([...response]);
  };

  useEffect(() => {
    getTasks();
    getCount();
  }, []);

  return (
    <TodoContext.Provider
      value={{
        tasks,
        count,
        handleAddTask,
        handleEdit,
        handleChange,
        handleDelete,
        handleClear,
        handleCheckAll,
        handleViewActive,
        handleViewAll,
        handleViewCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContext;

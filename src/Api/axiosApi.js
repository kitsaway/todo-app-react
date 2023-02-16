import axios from "axios";

const API = {
  getTasks: async () => {
    const { data: taskArr } = await axios.get(process.env.REACT_APP_URL);
    return taskArr;
  },
  createTasks: async (taskForm) => {
    const { data: newTask } = await axios.post(process.env.REACT_APP_URL, {
      content: taskForm.content,
    });
    return newTask;
  },
  updateStatus: async (id, status) => {
    const { data: updateStatus } = await axios.patch(
      `${process.env.REACT_APP_URL}/${id}`,
      { status: status ? false : true }
    );
    return updateStatus;
  },
  updateTask: async (id, newTask) => {
    const { data: updateContent } = await axios.put(
      `${process.env.REACT_APP_URL}/update/${id}`,
      { content: newTask }
    );
    return updateContent;
  },
  deleteTask: async (id) => {
    const { data: deleteTask } = await axios.put(
      `${process.env.REACT_APP_URL}/${id}`
    );
    return deleteTask;
  },
  checkAll: async (status) => {
    const { data: checkAll } = await axios.patch(process.env.REACT_APP_URL, {
      status: status ? false : true,
    });
    return checkAll;
  },
  clearCompleted: async () => {
    const { data: clearCompleted } = await axios.put(process.env.REACT_APP_URL);
    return clearCompleted;
  },
  filterTasks: async (newFilter) => {
    const { data: filterTasks } = await axios.get(
      `${process.env.REACT_APP_URL}/filter/${newFilter}`,
      { filter: newFilter }
    );
    return filterTasks;
  },
};

export default API;

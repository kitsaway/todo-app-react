import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import TodoContext from "../Context/TodoContext";

const Input = () => {
  const { handleAddTask, handleCheckAll } = useContext(TodoContext);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Enter what needs to be done!");
    } else {
      const create_date = new Date().toLocaleString() + "";
      const id = uuidv4();
      let taskForm = {
        id: id,
        content: text,
        created_date: create_date,
        updated_at: null,
        isDeleted: false,
        deleted_at: null,
        status: false,
        filter: "active",
      };
      handleAddTask(taskForm);
      setText("");
    }
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <div className="input-field">
        <i
          id="toggle-btn"
          className="icon"
          aria-hidden="true"
          onClick={handleCheckAll}
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </i>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="addTask"
            value={text}
            onChange={handleChange}
            placeholder="What needs to be done?"
          />
        </form>
      </div>
    </header>
  );
};

export default Input;

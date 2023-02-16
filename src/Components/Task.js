import { useContext, useState } from "react";
import TodoContext from "../Context/TodoContext";

const Task = ({ id, status, content }) => {
  const { handleChange, handleDelete, handleEdit } = useContext(TodoContext);
  const [toggle, setToggle] = useState(true);
  const [newContent, setNewContent] = useState(content);

  const handleToggle = (e) => {
    e.preventDefault();
    setToggle(false);
  };

  const getNewContent = (e) => {
    e.preventDefault();
    setNewContent(e.target.value);
  };

  return toggle ? (
    <li
      className="task-li"
      key={id}
      id={id}
      onDoubleClick={(e) => handleToggle(e)}
    >
      <input
        type="checkbox"
        className="checkbox"
        checked={status}
        onChange={() => handleChange(id, status)}
      />
      {content}
      <span className="delete" onClick={() => handleDelete(id)}>
        x
      </span>
    </li>
  ) : (
    <li className="task-li" key={id} id={id}>
      <input
        type="checkbox"
        className="checkbox"
        checked={status}
        onChange={() => handleChange(id, status)}
      />
      <input
        type="text"
        className="task-update"
        value={newContent}
        onChange={(e) => {
          getNewContent(e);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setToggle(true);
            handleEdit(id, newContent);
            e.preventDefault();
            e.stopPropagation();
          }
        }}
      />
    </li>
  );
};

export default Task;

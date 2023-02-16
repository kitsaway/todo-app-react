import { useContext } from "react";
import TodoContext from "../Context/TodoContext";

const Footer = () => {
  const { count, handleClear, handleViewAll, handleViewActive, handleViewCompleted } = useContext(TodoContext);

  const listItems = [
    {
      id: "all-tasks",
      href: "#/All",
      onClick: handleViewAll,
      content: "All",
    },
    {
      id: "active-tasks",
      href: "#/Active",
      onClick: handleViewActive,
      content: "Active",
    },
    {
      id: "completed-tasks",
      href: "#/Completed",
      onClick: handleViewCompleted,
      content: "Completed",
    },
  ];

  return (
    <footer className="app-footer">
      {count < 2 ? (
        <span id="todo-count" className="todo-count">
          {count} Item left
        </span>
      ) : (
        <span id="todo-count" className="todo-count">
          {count} Items left
        </span>
      )}
      <ul className="filters">
        {listItems.map((item) => (
          <li id={item.id} key={item.id}>
            <a href={item.href} onClick={item.onClick}>
              {item.content}
            </a>
          </li>
        ))}
      </ul>
      <a
        id="clear-completed"
        className="clear-btn"
        href="#/Clear"
        onClick={handleClear}
      >
        Clear completed
      </a>
    </footer>
  );
};

export default Footer;

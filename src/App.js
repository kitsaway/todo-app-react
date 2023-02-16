import "./App.css";
import Input from "./Components/Input";
import TaskList from "./Components/TaskList";
import Footer from "./Components/Footer";
import { TodoProvider } from "./Context/TodoContext";

const App = () => {
  return (
    <TodoProvider>
      <div className="container">
        <Input />
        <TaskList />
        <Footer />
      </div>
    </TodoProvider>
  );
};

export default App;

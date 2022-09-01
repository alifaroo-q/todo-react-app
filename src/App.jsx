import Input from "./components/Input";
import Navbar from "./components/Navbar";
import TodoArea from "./components/TodoArea";

import { TodoInputProvider } from "./TodoInputContext";

function App() {
  return (
    <div className="App container mr-auto ml-auto min-h-screen">
      <TodoInputProvider>
        <Navbar />
        <Input />
        <TodoArea />
      </TodoInputProvider>
    </div>
  );
}

export default App;

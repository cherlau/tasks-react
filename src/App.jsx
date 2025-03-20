import { useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar prog",
      description: "lavar louça",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Fazer compras",
      description: "estar com a familia",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Pagar contas",
      description: "fazer compras a comprar",
      isCompleted: false,
    },
  ]);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <Tasks tasks={tasks} />
        {/* <AddTasks /> */}
      </div>
    </div>
  );
}

export default App;

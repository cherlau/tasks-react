import { ChevronRightIcon } from "lucide-react";

function Tasks(props) {
  console.log(props);
  return (
    <ul className="">
      {props.tasks.map((tasks) => (
        <li key={tasks.id} className="flex justify-between gap-2">
          <button className="bg-slate-400 text-left w-full text-white p-2 rounded-md">
            {tasks.title}
          </button>
          <button className="bg-slate-400 p-2 rounded-md text-white">
            <ChevronRightIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;

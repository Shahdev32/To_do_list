import React, { useState } from 'react';
import { IoAddSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const ToDoList = () => {
  // State variables for task input and task list
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  // Function to add a task
  const addTask = () => {
    if (task) {
      const newTask = {
        id: list.length + 1,
        title: task,
        toggle: false,
      };
      setList([newTask, ...list]);
      setTask("");
    }
  };

  // Function to delete a task
  const deleteTask = (id) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  };

  return (
    <div className="mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4 text-center">To Do Menu</h1>
      <div className="flex items-center justify-center mb-4">
        <input
          type="text"
          className="w-[350px] border-2 border-blue-900 placeholder-white text-black p-2 mr-2 rounded"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={addTask}
        >
          <IoAddSharp />
        </button>
      </div>
      <div>
        {list.length === 0 ? (
          <h2 className="text-center text-gray-500">Add Tasks</h2>
        ) : (
          list.map((task) => (
            <div key={task.id} className="flex items-center justify-between my-2 p-2 bg-gray-100 rounded shadow">
              <span>{task.title}</span>
              <button onClick={() => deleteTask(task.id)} className="text-red-500">
                <MdDelete />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ToDoList;

"use client";

import { useState } from "react";
import { useAuth } from "../layout";
import Link from "next/link";

export default function FlowApp() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");
  const { logout } = useAuth();

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask("");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Flow App</h2>
      <div className="mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border p-2 mr-2"
          placeholder="Enter a new task"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Add Task
        </button>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="mb-2">
            <Link href={`/apps/flow/${index}`}>{task}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

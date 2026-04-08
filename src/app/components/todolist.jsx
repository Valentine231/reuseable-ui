"use client";

import { useState } from "react";
import { useTodoStore } from "../store/usetodostore";

export default function Todo() {
  const [input, setInput] = useState("");

  const { todos, addTodo, toggleTodo, deleteTodo } = useTodoStore();

  const handleAdd = () => {
    if (!input.trim()) return;
    addTodo(input);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center p-6">
      <div className="w-full max-w-md">

        <h1 className="text-2xl font-bold mb-4">Todo List</h1>

        {/* INPUT */}
        <div className="flex gap-2 mb-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a task..."
            className="flex-1 px-3 py-2 rounded bg-gray-800 outline-none"
          />
          <button
            onClick={handleAdd}
            className="bg-red-600 px-4 rounded"
          >
            Add
          </button>
        </div>

        {/* LIST */}
        <div className="space-y-2">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex justify-between items-center bg-gray-900 px-3 py-2 rounded"
            >
              <span
                onClick={() => toggleTodo(todo.id)}
                className={`cursor-pointer ${
                  todo.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {todo.text}
              </span>

              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
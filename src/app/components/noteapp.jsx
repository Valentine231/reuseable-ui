"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NoteApp() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  // ADD NOTE
  const addNote = () => {
    if (!note.trim()) return;

    const newNote = {
      id: Date.now(),
      text: note,
    };

    setNotes((prev) => [newNote, ...prev]);
    setNote("");
  };

  // DELETE NOTE
  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="max-w-md my-35 mx-auto  p-6 bg-gray-900 text-white rounded-xl shadow-lg ">
      <h1 className="text-2xl font-bold mb-4">📝 Note App</h1>

      {/* INPUT */}
      <div className="flex gap-2 mb-4">
        <motion.input
        whileTap={{scale:0.6}}
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write a note..."
          className="flex-1 p-3 rounded bg-gray-800 outline-none"
        />

        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{scale:0.6}}
          onClick={addNote}
          className="bg-blue-500 px-4 rounded"
        >
          Add
        </motion.button>
      </div>

      {/* NOTES LIST */}
      <div className="space-y-2">
        <AnimatePresence>
          {notes.map((n) => (
            <motion.div
              key={n.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="flex justify-between items-center bg-gray-800 p-3 rounded"
            >
              <p>{n.text}</p>

              <button
                onClick={() => deleteNote(n.id)}
                className="text-red-400 text-sm"
              >
                Delete
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
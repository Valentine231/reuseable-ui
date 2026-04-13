"use client";

import { useEffect, useState } from "react";

export default function KeyCode() {
  const [keyData, setKeyData] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      setKeyData({
        key: e.key,
        code: e.code,
        keyCode: e.keyCode,
      });
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      {!keyData ? (
        <h1 className="text-2xl">Press any key 👀</h1>
      ) : (
        <div className="flex gap-6 text-center">
          <Box label="Key" value={keyData.key} />
          <Box label="Code" value={keyData.code} />
          <Box label="KeyCode" value={keyData.keyCode} />
        </div>
      )}
    </div>
  );
}

function Box({ label, value }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-32">
      <p className="text-sm text-gray-400">{label}</p>
      <h2 className="text-xl font-bold mt-2">{value}</h2>
    </div>
  );
}
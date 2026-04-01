"use client"

import { useState, useEffect } from "react";

export const PasswordGenerator = () => {
    const [length, setLength] = useState(12);
    const [includeLower, setIncludeLower] = useState(true);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [generatedPassword, setGeneratedPassword] = useState("");
   
    
    const generatePassword = () => {
        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numberChars = "0123456789";
        const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

        let characterPool = ""
        if(includeUppercase) characterPool += uppercaseChars;
        if(includeLower) characterPool += lowercaseChars;
        if(includeNumbers) characterPool += numberChars;
        if(includeSymbols) characterPool += symbolChars;
        characterPool += lowercaseChars;

        if(!characterPool) return setGeneratedPassword("")

        let password = "";
        for(let i=0; i<length; i++) {
            const randomIndex = Math.floor(Math.random() * characterPool.length);
            password += characterPool[randomIndex];
        }
        setGeneratedPassword(password);
    }

    const copieToClipboard = () => {
        navigator.clipboard.writeText(generatedPassword);
    }

    return (
         <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-xl shadow-lg flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Password Generator</h2>

      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
          />
          Include Uppercase
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={includeLower}
            onChange={() => setIncludeLower(!includeLower)}
          />
          Include Lowercase
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          Include Numbers
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
          />
          Include Symbols
        </label>
      </div>

      <div className="flex items-center gap-2">
        <label>Length: {length}</label>
        <input
          type="range"
          min="6"
          max="32"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <button
        onClick={generatePassword}
        className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded"
      >
        Generate Password
      </button>

      {generatedPassword && (
        <div className="flex items-center gap-2 mt-2">
          <input
            type="text"
            value={generatedPassword}
            readOnly
            className="flex-1 bg-gray-800 text-white px-3 py-2 rounded"
          />
          <button
            onClick={copieToClipboard}
            className="bg-green-500 hover:bg-green-600 px-3 py-2 rounded"
          >
            Copy
          </button>
        </div>
      )}
    </div>
    )


}
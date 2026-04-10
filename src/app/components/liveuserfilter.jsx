"use client"

import React, { useState } from "react"

const user = [
    {id: 1, name: "Alice", age: 30},
    {id: 2, name: "Bob", age: 25},
    {id: 3, name: "Charlie", age: 35},
    {id: 4, name: "David", age: 28},
    {id: 5, name: "Eve", age: 22},
    {id: 6, name: "Frank", age: 40},
    {id: 7, name: "Grace", age: 27},
    {id: 8, name: "Heidi", age: 32},
    {id: 9, name: "Ivan", age: 29},
    {id: 10, name: "Judy", age: 24}
]

export default function LiveUserFilter() {
    const[query, setquery]=useState("")
    const [Filter, setFilter]=useState(user)

    const handlefilter=(e)=>{
        const value=e.target.value
        setquery(value)

        const FilterData=user.filter((user)=>user.name.toLowerCase().includes(value.toLowerCase()))
        setFilter(FilterData)
    }

    return(
         <div className="p-6">
      {/* INPUT */}
      <input
        type="text"
        placeholder="Search users..."
        value={query}
        onChange={handlefilter}
        className="p-3 border-gray-50 bg-gray-700 rounded w-1/2 mb-4 text-black font-bold font-comicsans"
      />

      {/* LIST */}
      <ul className="space-y-2">
        {Filter.map((user) => (
          <li key={user.id} className="p-2 bg-gray-200 rounded text-2xl font-bold font-comicsans text-blue-800">
            {user.name}
            <br />
            <span className="text-lg font-normal text-gray-600"> age:({user.age})</span>
           
          </li>
        ))}
      </ul>
    </div>
    )
}
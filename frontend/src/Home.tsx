import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Home() {
    const  [data, setData] = useState([]);
    useEffect (() => {
        fetch('http://localhost:8080/admin')
        .then((res) => res.json())
      .then((data) => setData(data)) // Set the fetched data to the state
      .catch((err) => console.error(err));
    },[]
)
  return (
<div className="flex items-center justify-center bg-gray-800 min-h-screen">
    <div className="bg-white rounded-lg w-1/2 p-6">
        <h2 className="text-2xl font-semibold mb-4">For HOME Practice</h2>
        <Link to="/Create" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Add +</Link>
        <table className="min-w-full mt-4 bg-white border border-gray-300">
            <thead className="bg-gray-200">
                <tr>
                    <th className="py-2 px-4 border-b">Admin ID</th>
                    <th className="py-2 px-4 border-b">Admin USER</th>
                    <th className="py-2 px-4 border-b">Admin Password</th>
                    <th className="py-2 px-4 border-b">Admin Name</th>
                    <th className="py-2 px-4 border-b">Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((d, i) => (
                    <tr key={i}>
                        <td className="py-2 px-4 border-b">{d.admin_id}</td>
                        <td className="py-2 px-4 border-b">{d.admin_user}</td>
                        <td className="py-2 px-4 border-b">{d.admin_password}</td>
                        <td className="py-2 px-4 border-b">{d.admin_name}</td>
                        <td className="py-2 px-4 border-b">
                            <Link to={`/Update/${d.admin_id}`} className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">Update</Link>
                            <Link to="/Delete" className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 ml-2">Delete</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>


  )
}

export default Home

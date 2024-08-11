import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Update() {
    const [id, setId] = useState(''); // State for admin ID
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();  
        axios.put(`http://localhost:8080/update/${id}`, { user, pass, name })  
        .then(res => {
            navigate('/');
        })
        .catch(err => console.log(err));
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-500">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <form onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold mb-4">Update User</h2>
                    <div className="mb-4">
                        <label htmlFor="id" className="block text-sm font-medium text-gray-700">Admin ID</label>
                        <input
                            type="text"
                            id="id"
                            placeholder="Enter Admin ID"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            onChange={e => setId(e.target.value)} // Capture Admin ID
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="user" className="block text-sm font-medium text-gray-700">Admin User</label>
                        <input
                            type="text"
                            id="user"
                            placeholder="Enter Username"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            onChange={e => setUser(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Admin Password</label>
                        <input
                            type="text"
                            id="password"
                            placeholder="Enter Password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            onChange={e => setPass(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Admin Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter Name"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            onChange={e => setName(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-green-500 text-white font-bold rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Update;

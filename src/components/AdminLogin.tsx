import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('isAdmin') === 'true') {
            navigate('/dashboard');
        }
    }, [navigate]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === 'admin' && password === 'admin123') {
            localStorage.setItem('isAdmin', 'true');
            navigate('/dashboard');
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
                {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
                <div className="mb-4">
                    <label className="block mb-1 font-semibold">Username</label>
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="w-full px-3 py-2 border rounded" required />
                </div>
                <div className="mb-6">
                    <label className="block mb-1 font-semibold">Password</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full px-3 py-2 border rounded" required />
                </div>
                <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded font-semibold hover:bg-purple-700 transition">Login</button>
            </form>
        </div>
    );
};

export default AdminLogin; 
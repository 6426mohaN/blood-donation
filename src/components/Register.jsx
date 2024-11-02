import { useState } from 'react';

const Register = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        bloodType: '',
        age: ''
    });

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle registration logic
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">Register</h1>
            <form onSubmit={handleSubmit} className="mt-4">
                <input
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="border p-2 w-full mb-4"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="border p-2 w-full mb-4"
                    required
                />
                <input
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="border p-2 w-full mb-4"
                    required
                />
                <input
                    type="text"
                    name="bloodType"
                    value={userData.bloodType}
                    onChange={handleChange}
                    placeholder="Blood Type"
                    className="border p-2 w-full mb-4"
                    required
                />
                <input
                    type="number"
                    name="age"
                    value={userData.age}
                    onChange={handleChange}
                    placeholder="Age"
                    className="border p-2 w-full mb-4"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white p-2">
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;

import { useState } from 'react';

const Donate = () => {
    const [formData, setFormData] = useState({
        name: '',
        bloodType: '',
        preferredDate: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">Donate Blood</h1>
            <form onSubmit={handleSubmit} className="mt-4">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="border p-2 w-full mb-4"
                    required
                />
                <input
                    type="text"
                    name="bloodType"
                    value={formData.bloodType}
                    onChange={handleChange}
                    placeholder="Blood Type"
                    className="border p-2 w-full mb-4"
                    required
                />
                <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="border p-2 w-full mb-4"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white p-2">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Donate;

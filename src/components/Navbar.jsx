import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="bg-blue-500 p-4">
        <ul className="flex space-x-4">
            <li><Link className="text-white" to="/">Home</Link></li>
            <li><Link className="text-white" to="/about">About</Link></li>
            <li><Link className="text-white" to="/contact">Contact</Link></li>
            <li><Link className="text-white" to="/donate">Donate</Link></li>
            <li><Link className="text-white" to="/register">Register</Link></li>
            <li><Link className="text-white" to="/schedule">Schedule Appointment</Link></li>
            <li><Link className="text-white" to="/feedback">Feedback</Link></li>
            <li><Link className="text-white" to="/inventory">Blood Inventory</Link></li>
            <li><Link className="text-white" to="/events">Donation Events</Link></li>
        </ul>
    </nav>
);

export default Navbar;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Donate from './components/Donate';
import Register from './components/Register';
import ScheduleAppointment from './components/ScheduleAppointment';
import Feedback from './components/Feedback';
import BloodInventory from './components/BloodInventory';
import DonationEvents from './components/DonationEvents';

const RoutesComponent = () => (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/register" element={<Register />} />
            <Route path="/schedule" element={<ScheduleAppointment />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/inventory" element={<BloodInventory />} />
            <Route path="/events" element={<DonationEvents />} />
        </Routes>
    </Router>
);

export default RoutesComponent;

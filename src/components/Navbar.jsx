// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-charcoal-gray p-4 fixed top-0 left-0 w-full z-50"> {/* Fixed at the top with full width */}
            <ul className="flex justify-end space-x-8">
                <li>
                    <Link className="text-light-gray hover:text-slate-gray" to="/">Home</Link>
                </li>
                <li>
                    <Link className="text-light-gray hover:text-slate-gray" to="/projects">Projects</Link>
                </li>
                <li>
                    <Link className="text-light-gray hover:text-slate-gray" to="/curriculum">Curriculum</Link>
                </li>
                <li>
                    <Link className="text-light-gray hover:text-slate-gray" to="/about">About</Link>
                </li>
                <li>
                    <Link className="text-light-gray hover:text-slate-gray" to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

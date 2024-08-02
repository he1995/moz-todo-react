import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter as Router,
    Navigate,
    Routes,
    Route,
    Link
} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Settings from './Settings';
import User from './User';

const NotFound = () => {
    return <h2>404 Page Not Found</h2>;
};

export const RouteApp = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/user/1">User 1</Link>
                        </li>
                        <li>
                            <Link to="/user/2">User 2</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/dashboard" element={<Dashboard />}>
                        <Route path="profile" element={<Profile />} />
                        <Route path="settings" element={<Settings />} />
                    </Route>
                    <Route path="/user/:userId" element={<User />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </Router>
    );
};


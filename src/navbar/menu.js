import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuVidya() {
    return (
        <div className="menu-vidya">
            <div className="menu-item-vidya white-text">
                <Link to="/" className="link-vidya">Home</Link>
            </div>
            <div className="menu-item-vidya white-text">
                <Link to="/" className="link-vidya">Schedule</Link>
            </div>
            <div className="menu-item-vidya white-text">
                <Link to="/conference" className="link-vidya">Conference</Link>
            </div>
            <div className="menu-item-vidya white-text">
                <Link to="/" className="link-vidya">Help</Link>
            </div>
            <div className="menu-item-vidya white-text">
                <Link to="/" className="link-vidya">Profile</Link>
            </div>
        </div>
    );
}
import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Navbar } from './Navbar';

export const Dashboard = ({ user }) => {
    return(
        <div>
            <Navbar user={user} />
            <div className="sidebar">
                
            </div>
        </div>
    );
}
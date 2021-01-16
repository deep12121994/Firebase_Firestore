import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

export class Dashboard extends Component {
    render(){
        return(
            <div>
                <div className="sidebar">
                    <Sidebar />
                </div>
            </div>
        );
    }
}

export default Dashboard;
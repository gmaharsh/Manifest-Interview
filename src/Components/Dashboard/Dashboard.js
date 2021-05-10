import React from 'react'
import './Dashboard.css';

import Navigation from '../Navigation/Navigation';
import ChatScreen from '../ChatScreen/ChatScreen';

function Dashboard() {

    return (
        <div className="Dashboard">
            <Navigation />
            <hr />
            <ChatScreen/>
        </div>
    )
}

export default Dashboard

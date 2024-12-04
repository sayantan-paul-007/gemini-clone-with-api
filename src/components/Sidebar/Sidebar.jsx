import React, { useState } from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'
const Sidebar = () => {
    const [extend, setExtend] = useState(false)
  return (
    <div className='sidebar'>
        <div className="top">
            <img onClick={() => setExtend(prev=>!prev)} className='menu' src={assets.hamburgericon} alt="ham-icon" />
            <div className="new-chat">
                <img src={assets.plusicon} alt="plus-icon" />
                {extend?<p>New Chat</p>:null}
            </div>
            {extend?
             <div className="recent">
                <p className="recent-title">Recent</p>
                <div className="recent-entry">
                    <img src={assets.chaticon} alt="chat-icon" />
                    <p>Test message</p>
                </div>
            </div>:null
            }
           
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.helpicon} alt="help-icon" />
                {extend?<p>Help</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.historyicon} alt="history-icon" />
                {extend?<p>History</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.settingsicon} alt="settings-icon" />
                {extend?<p>Settings</p>:null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar
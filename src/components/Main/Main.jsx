import React from 'react'
import './Main.css'
import {assets} from '../../assets/assets'
const Main = () => {
  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.pfp} alt="profile-pic" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Dev.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={assets.compassicon} alt="block-icons" />
                </div>
                <div className="card">
                    <p>Briefly summarize this concept: urban planning</p>
                    <img src={assets.lightbulbicon} alt="block-icons" />
                </div>
                <div className="card">
                    <p>Brainstorm team bonding activities for our work retreat</p>
                    <img src={assets.chaticon} alt="block-icons" />
                </div>
                <div className="card">
                    <p>Improve the readability of the following code</p>
                    <img src={assets.codeicon} alt="block-icons" />
                </div>
            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Enter a prompt here' />
                    <div>
                        <img src={assets.galleryaddicon} alt="search-icons" />
                        <img src={assets.micicon} alt="search-icons" />
                        <img src={assets.sendicon} alt="search-icons" />
                    </div>
                </div>
                <p className="bottom-info">
                     Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                </p>
               
            </div>
        </div>
    </div>
  )
}

export default Main
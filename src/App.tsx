import React from "react";

import { GiKiwiBird } from "react-icons/gi";
import { FiHome, FiBell, FiMail, FiMoreVertical } from "react-icons/fi";

import "./styles.css";

function App() {
  return (
    <div id="app">
      <header id="main-header">
        <div className="wrapper">
          <nav>
            <ul>
              <li>
                <FiHome color="#667580" size={18} /> Home
              </li>
              <li>
                <FiBell color="#667580" size={18} /> Notifications
              </li>
              <li>
                <FiMail color="#667580" size={18} /> Messages
              </li>
            </ul>
          </nav>
          <GiKiwiBird color="#3bb9e3" size={24} />
          <div className="side">
            <input type="text" placeholder="Search on Twitter" />
            <img
              src="https://avatars0.githubusercontent.com/u/51516616?s=460&u=9dceff67107fcc14afd0339af87e1fadeac4dfea&v=4"
              alt="avatar"
            />
            <button>Tweet</button>
          </div>
        </div>
      </header>
      <div className="banner">
        <h1>Aula FlexBox</h1>
      </div>
      <div className="bar">
        <div className="wrapper">
          <ul>
            <li className="active">
              <span>Tweets</span>
              <strong>1323</strong>
            </li>
            <li>
              <span>Following</span>
              <strong>431</strong>
            </li>
            <li>
              <span>Followers</span>
              <strong>613</strong>
            </li>
            <li>
              <span>Favorites</span>
              <strong>39</strong>
            </li>
          </ul>
          <div className="actions">
            <button>Follow</button>
            <FiMoreVertical color="#667580" size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";

import { GiKiwiBird } from "react-icons/gi";
import { FiHome, FiBell, FiMail } from "react-icons/fi";

import "./styles.css";

function App() {
  return (
    <div id="app">
      <header id="main-header">
        <div className="wrapper">
          <nav>
            <ul>
              <li>
                <FiHome color="dodgerblue" size={18} /> Home
              </li>
              <li>
                <FiBell color="dodgerblue" size={18} /> Notifications
              </li>
              <li>
                <FiMail color="dodgerblue" size={18} /> Messages
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
    </div>
  );
}

export default App;

import React from "react";

import { GiKiwiBird } from "react-icons/gi";
import {
  FiHome,
  FiBell,
  FiMail,
  FiMoreVertical,
  FiMapPin,
  FiLink,
  FiClock,
  FiSmile,
  FiUser,
  FiImage,
} from "react-icons/fi";

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
      <div className="wrapper-content wrapper">
        <aside className="profile">
          <img
            className="avatar"
            src="https://avatars0.githubusercontent.com/u/51516616?s=460&u=9dceff67107fcc14afd0339af87e1fadeac4dfea&v=4"
            alt="avatar"
          />
          <h1>André Sampaio</h1>
          <span>@andore</span>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <ul className="list">
            <li>
              <FiMapPin size={18} color="#667580" /> Sorocaba, Brazil
            </li>
            <li>
              <FiLink size={18} color="#667580" /> github.com/apsampaio
            </li>
            <li>
              <FiClock size={18} color="#667580" /> Joined June 2007
            </li>
            <li>
              <FiSmile size={18} color="#667580" /> Born the 3th of March 1997
            </li>
          </ul>
          <div className="widget followers">
            <strong>
              <FiUser size={18} color="#667580" /> 73 followers that you know
            </strong>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="widget images">
            <strong>
              <FiImage size={18} color="#667580" /> 266 photos and videos
            </strong>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </aside>
        <section className="timeline">timeline</section>
        <aside className="widgets">
          <div className="widget follow">
            <div className="title">
              <strong>Who to follow</strong>
              <a href="">Refresh</a>
              <a href="">View all</a>
            </div>

            <ul>
              <li>
                <img
                  src="https://avatars0.githubusercontent.com/u/51516616?s=460&u=9dceff67107fcc14afd0339af87e1fadeac4dfea&v=4"
                  alt="avatar"
                />
                <div className="info">
                  <strong>
                    Spade <span>@spade_be</span>
                  </strong>
                  <button>Follow</button>
                </div>
                <a href="">x</a>
              </li>
            </ul>
          </div>
          <div className="widget trends"></div>
        </aside>
      </div>
    </div>
  );
}

export default App;

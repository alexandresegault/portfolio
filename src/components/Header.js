import React from "react";
import "./Header.css";
import Img from "../Image/imgMe.jpg";
import Thumbstack from "../Image/ThumbTack.png";
const Header = () => {
  return (
    <div className="header">
      <div className="presentation">
        <img src={Thumbstack} className="thumbstackPres"></img>
        <img src={Img} className="me"></img>
        <div className="nameAndWork">
          <h1>Alexandre Segault</h1>
          <h2>Développeur Web Junior</h2>
        </div>
      </div>

      <div className="langages">
        <img src={Thumbstack} className="thumbstackLang"></img>
        <h2>Langages / Technologies</h2>
        <ul>
          <li>- HTML</li>
          <li>- CSS</li>
          <li>- JavaScript</li>
          <li>- React.js</li>
          <li>- Node.js</li>
          <li>- MySQL</li>
          <li>- Git</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

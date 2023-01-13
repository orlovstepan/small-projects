import React from "react";
import avatar from "../Images/119982942.jpg";
import mail from "../Images/Mail.png";
import linkedin from "../Images/linkedin.png";

function Info() {
  return (
    <div>
      <img className="avatar" src={avatar} alt="avatar" />
      <h1 className="name">Stepan Orlov</h1>
      <h2 className="title">Frontend Developer</h2>
      <div className="buttons">
        <a href="mailto:orlovst94@gmail.com">
          <button className="email">
            <img src={mail} alt="letter" /> Email
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/stepanorlov/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="linkedin">
            <img src={linkedin} alt="linkedin" />
            LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
}

export default Info;

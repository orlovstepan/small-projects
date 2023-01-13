import React from "react";
import facebook from "../Images/Facebook Icon.png";
import github from "../Images/GitHub Icon.png";
import instagram from "../Images/Instagram Icon.png";
import twitter from "../Images/Twitter Icon.png";

function Footer() {
  return (
    <div className="icons">
      <a
        href="https://facebook.com/0rlovstepan"
        target="_blank"
        rel="noreferrer"
      >
        <img src={facebook} alt="facebook" />{" "}
      </a>
      <a
        href="https://github.com/orlovstepan/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={github} alt="github" />
      </a>
      <a
        href="https://instagram.com/orlovstepan"
        target="_blank"
        rel="noreferrer"
      >
        <img src={instagram} alt="instagram" />
      </a>
      <a href="https://twitter.com/just_orlov" target="_blank" rel="noreferrer">
        <img src={twitter} alt="twitter" />
      </a>
    </div>
  );
}

export default Footer;

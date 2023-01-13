import React from "react";

function Bio() {
  return (
    <div className="bio">
      <div className="about">
        <h3 className="about--headline">About</h3>
        <p className="about--text">
          Product-focused junior developer with a strong business development
          background. Proven record of leading digital & strategic projects.
          Seeking exciting new challenges that can be solved with web
          technologies.
        </p>
      </div>
      <div className="about">
        <h3 className="about--headline">Interests</h3>
        <p className="about--text">
          {" "}
          I love travelling, reading, doing sports, and playing chess. I teach
          English (also volunteering) as a hobby during my free time.{" "}
        </p>
      </div>
    </div>
  );
}

export default Bio;

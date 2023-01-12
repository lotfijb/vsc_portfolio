import React from "react";
import "./BodyContent.css";
const SkillsPage = ({ closed }) => {
  return (
    <div className={closed ? "extended" : "body-content"}>
      <h1>Skills 🔑</h1>
      <hr />
      <p>
        Explore my technical and soft skills in this Skills section.
        <br /> A list of my proficiency in various programming languages,
        technologies, and tools is provided as well as my non-tech skills. I
        have honed these skills through experience and a drive to learn and
        improve.
        <br /> See how I can contribute to your project here.
      </p>
      <br />
      <h1>What I use to build websites 💻</h1>
      <hr />
      <br />
      <h3>⚪ HTML5, CSS3</h3>
      <br />
      <h3>⚪ Javascript, ES6</h3>
      <br />
      <h3>⚪ ReactJS</h3>
      <br />
      <h3>⚪ PHP, SQL</h3>
      <br />
      <h3>⚪ Git (version control)</h3>
      <br />
      <br />
      <h1>Design tools 🔍</h1>
      <hr />
      <h3>⚪ Figma</h3>
      <br />
      <h3>⚪ Canva</h3>
      <br />
      <h1>Soft skills 💡</h1>
      <hr />
      <h3>⚪ Communication</h3>
      <br />
      <h3>⚪ Critical thinking</h3>
      <br />
      <h3>⚪ Decision making</h3>
      <br />
      <h3>⚪ Problem solving</h3>
      <br />
      <h3>⚪ Team work</h3>
    </div>
  );
};

export default SkillsPage;

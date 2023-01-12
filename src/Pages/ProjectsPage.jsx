import React from "react";
import "./BodyContent.css";
const ProjectsPage = ({ closed }) => {
  return (
    <div className={closed ? "extended" : "body-content"}>
      <h1>Projects ⚡</h1>
      <hr />
      <p>
        Discover my front-end development skills through my featured projects.
        <br />
        From personal endeavors to group collaborations, each project showcases
        my abilities and passion for bringing designs to life.
        <br /> My collection of projects demonstrates my proficiency in
        animations, responsive design, and efficient performance. Take a look,
        ask me questions and leave your feedback.
      </p>
      <br />
      <h1 className="project-title">Animit.css (in progress 🔧)</h1>
      <hr />
      <h3>
        ⚪ Lightweight, open-source, CSS framework for easy animation
        integration.
      </h3>
      <br />
      <h3>
        {" "}
        ⚪ The framework provides a set of CSS classes and JavaScript API that
        allows developers to quickly and easily add animations to elements on a
        webpage.
      </h3>
      <br />
      <h1 className="project-title">Bullet Journal Chrome extension 📓</h1>
      <hr />
      <h3>
        ⚪ Developed a note taking Chrome extension to jot down quick thoughts
        or to save longer notes filled with checklists, images, web links using
        ReactJS.
      </h3>
      <h3>
        ⚪{" "}
        <a
          href="https://addons.mozilla.org/en-US/firefox/addon/bullet-journal/"
          target="_blank"
        >
          Download it here for Firefox.{" "}
        </a>
      </h3>
      <br />
      <h3>
        ⚪{" "}
        <a
          href="https://github.com/lotfijb/bullet-journal-extension"
          target="_blank"
        >
          Browse code here.
        </a>
      </h3>
      <br />
      <h3>
        ⚪{" "}
        <a
          href="https://drive.google.com/drive/folders/1bb5hCfqUlUV-sptiTSRD-0OkL40HaxaT?usp=sharing"
          target="_blank"
        >
          Download dist folder and upload it manually to other browsers.
        </a>
      </h3>
      <br />
      <h1 className="project-title">Rate ISI (in progress 🔧)</h1>
      <hr />
      <h3>
        ⚪ Developed the front-end part of a platform that gives the university
        students the ability to anonymously rate their professors.
      </h3>
      <br />
      <h1 className="project-title">Online food ordering system </h1>
      <hr />
      <h3>
        ⚪ Developed a system that mostly focuses on controlling online food
        orders.
      </h3>
      <br />
      <h3>⚪ It assists in keeping track of clients and their orders.</h3>
      <br />
      <h3>
        ⚪ It displays all the available meals with their respective
        information.
      </h3>
      <br />
      <h3>
        ⚪{" "}
        <a
          href="https://www.linkedin.com/posts/lotfijbeli_development-project-mysql-activity-6955815421698576384-73X1?utm_source=share&utm_medium=member_desktop"
          target="_blank"
        >
          Demo here
        </a>
      </h3>
      <br />
      <h1 className="project-title">Kwiz App (in progress)</h1>
      <hr />
      <h3>
        ⚪ Quiz game that allows users to compete against each other by
        answering questions on a variety of topics.
      </h3>
      <br />
      <h3>
        ⚪ Players can choose from a selection of topics and are presented with
        a series of multiple choice questions.
      </h3>
      <br />
      <h3>
        ⚪ Players' scores are ranked on a leaderboard, where they can see how
        they compare to other players who have taken the quiz.
      </h3>
      <br />
      <h1 className="project-title">VS Code inspired Portfolio 📝</h1>
      <hr />
      <h3>⚪ The one you are looking at now.</h3>
      <br />
      <h3>
        ⚪ Created my portfolio website based on VS Code Absolute Black theme.
      </h3>
      <br />
      <h1 className="project-title">Other projects ✅</h1>
      <hr />
      <h3>
        ⚪{" "}
        <a href="https://javascript-piano-lotfijb.netlify.app" target="_blank">
          Piano with Javascript
        </a>
      </h3>
      <br />
      <h3>
        ⚪{" "}
        <a href="https://guess-the-color-lotfijb.netlify.app" target="_blank">
          Guess the color game
        </a>
      </h3>
      <br />
      <h3>
        ⚪{" "}
        <a href="https://lotfijb-tetris-game.netlify.app" target="_blank">
          Tetris game
        </a>
      </h3>
    </div>
  );
};

export default ProjectsPage;

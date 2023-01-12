import React from "react";
import "./BodyContent.css";
const OverviewPage = ({ closed }) => {
  return (
    <div className={closed ? "extended" : "body-content"}>
      <h1>Overview 👋</h1>
      <hr />
      <p>
        My name is Lotfi Jebali and I am a computer science student with +1.5
        years of experience in front-end development.
        <br /> My skills include HTML, CSS, JavaScript, PHP, SQL and experience
        with libraries such as React.js.
        <br /> I am committed to creating user-friendly and responsive websites.
        I am a quick learner, self-motivated and enthusiast. I am currently
        expanding my skillset in web development and design.
        <br />
        Additionally, I write blog posts to share my thoughts and insights on
        technology topics, helping others learn and beginners kick off their own
        careers.
      </p>
      <br />
      <h1>Writings ✏️</h1>
      <hr />
      <p>
        I enjoy writing about technology topics, sharing my thoughts and ideas,
        and creating quick guides and tips. This section of my portfolio
        showcases some of my writing that I've done, whether it's a blog post,
        an article, or a tutorial. I hope that by sharing my insights and
        perspectives, I can help others learn and grow their knowledge.
      </p>
      <br />
      <h3>
        ⚪ I write on{" "}
        <a href="https://dev.to/lotfijb" target="_blank">
          dev.to
        </a>
      </h3>
      <br />
      <h3>
        ⚪ I write on{" "}
        <a href="https://medium.com/@lotfi.jbeli" target="_blank">
          Medium.
        </a>
      </h3>
      <br />
      <h3>
        ⚪ I share code snippets on{" "}
        <a href="https://codepen.io/lotfijbe" target="_blank">
          Codepen.
        </a>
      </h3>
      <br />
      <br />
      <h1>Certificates 🥇</h1>
      <hr />
      <h3>⚪ Scrimba Front End Developer Career Path</h3>
      <br />
      <h3>⚪ Sololearn PHP</h3>
      <br />
      <h3>⚪ DataCamp Intermediate SQL</h3>
      <br />
      <h3>⚪ Sololearn SQL</h3>
      <br />
      <h1>Most proud of 🏆</h1>
      <hr />
      <h3>
        ⚪{" "}
        <a
          className="outer-links"
          href="https://www.linkedin.com/posts/lotfijbeli_github-hacktoberfest-opensource-activity-6991450344845156352--4OX?utm_source=share&utm_medium=member_desktop"
          target="_blank"
        >
          Hacktoberfest 2022 where I contributed to open source projects.🔗
        </a>
      </h3>
      <br />
      <h3>
        ⚪{" "}
        <a
          className="outer-links"
          href="https://www.holopin.io/@lotfijb#"
          target="_blank"
        >
          My Holopin badges.🔗
        </a>
      </h3>
      <br />
      <h3>
        ⚪{" "}
        <a
          href="https://github.com/lotfijb/html-css-for-beginners"
          target="_blank"
        >
          Beginners front-end resources, courses and exercices to learn and
          practice HTML & CSS.🔗
        </a>{" "}
      </h3>
      <br />
      <h3>⚪ Events hosting in my university.</h3>
      <br />
      <h3>⚪ High Level Programming department Chief ( Freeways ISI club ).</h3>
    </div>
  );
};

export default OverviewPage;
//https://www.holopin.io/@lotfijb#

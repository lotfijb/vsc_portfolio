import React from "react";
import "./BodyContent.css";
const ContactPage = ({ closed }) => {
  return (
    <div className={closed ? "extended" : "body-content"}>
      <h1>Contact 📫</h1>
      <hr />
      <p>
        Welcome to my Contact section! Here, you'll find all the information you
        need to get in touch with me.
        <br /> I'm always happy to hear from people who are interested in my
        work, whether you have a question about my portfolio, a business
        inquiry, or just want to say hello.
        <br /> You can reach me by email or social media and I'll get back to
        you as soon as possible.
        <br /> I invite you to connect with me and let's see how we can work
        together. Don't hesitate to reach out, I am always open to hearing new
        ideas and opportunities.
      </p>
      <hr />
      <br />
      <div className="footer-contact">
        <p>
          <img
            src="https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-6/310741193_1099197280987416_3665341357102155439_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ergtIN6wf_UAX9iLPIH&_nc_ht=scontent.ftun14-1.fna&oh=00_AfB0Ib1krrDFXGHGD8J9voyrnvggw5KB8fg9nmGscvcjNA&oe=63C45E5C"
            alt=""
            height="210px"
          />
        </p>
        <div>
          <h3 className="contact-links">
            {" "}
            <a href="https://linktr.ee/lotfijb" target="_blank">
              Click here
            </a>{" "}
            for all links
          </h3>
          <br />
          <h3 className="contact-links">
            <a href="mailto:lotfijbeli.jbeli@gmail.com">Send an email.</a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

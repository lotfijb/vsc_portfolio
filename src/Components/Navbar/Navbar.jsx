import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({ closedHandle, closed }) => {
  console.log(closed);
  return (
    <div className={closed ? "container no-bg" : "container"}>
      <div className="sidebar">
        <img
          onClick={closedHandle}
          className="side-image"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAAD8/PxkZGSrq6vs7Oza2tr19fVDQ0NTU1PLy8s4ODiLi4uHh4fCwsJ8fHwZGRlwcHBbW1uCgoLm5uZ2dnZISEjU1NRPT0+UlJQKCgru7u7c3Ny7u7sqKioREREzMzMeHh6kpKScnJxqamo+Pj4sLCwjIyO9vb2SkpJYK2jQAAAEwUlEQVR4nO3daXuiMBSGYcAVta4U6y5udP7/HxwdZ6ZGDxFowjmm7/N1enFxl7FElsTzs5t3BzkaPe9QIxoThR9E7f+tNTubmZf5L5uwHniyikYmhWkv4gY9FsyGxoTJvsXNIdttTAknMoFesDck7C64KVk1in4WM4Sf3JDs+lsTwjY3Q9cvE8IZt0LX8sOAcMWt0Fbsk0gL+9wIXYEJ4ZRbocuIcMmt0GVEKHDA9hWEuYRiRzSXIMwlFDrsvmZEKO2rrxKEEMoXGhmXyha+QwghhOxBmEM4p4RBf3Vbv6NrStZc3hXd11BbkL9qA8IhteHoVGjDRkoblQqPRna6UGvnhYnzwqHzwg15OQVCNVKYShHOycuaBoRrKUL6wi2EasKFTQh9vx3GqW4TwoXkLSJVuFtO+/t29iYKCBnGpX7nufByJzBoDjI3kV/YWtWrL8eY5nqvs5V57zu/UE6U0PN6zgu9g/PCKHFd6O3yC7eyherfzS9hq5tb2H1NYVDLLTxCyBuEEELIH4QQQsgfhBBCyJ8BYdt5YQwhbxBCCCF/1oQthioVNsbHdtUdyfuHtoQReb3VcuT9w4nyIwaFYu6QQqgGIYSWg9CHEEJnhaHzwjEpLDjjhpEqFS4G1GxPliOfEbYl9BaN6iN3xJpQTBBCCCF/EEIIIX8QQgghfxBCCCF/7gvfIIQQQvYgzCGsQcgbhGWFwVI/55N+AqhzxKxQiyfRz0TZEjYOsbKwRqiJWp3j3MONl8Nd9yt/vJFTxdoScjwTtSXfx7clXDDcIe1C6JsUtjSza9gKwksGz4exBcKTILxkUFhs4Qwj5RF+TWED4U0/VRhaIDzJ/WOYZ9RmUDjRDrZt9DHKMfI2KIyalReRO2JNKCYIIYSQPwghhJA/CCGEkD8IIYSQPwghhJA/A0LhTwypT19CCKHEICwtXFyfbPobdRGeXjFPF3nnhU04q43D8COOj5e2fzqtb0uTYcGSnSihjfv4ewirFFp5nkaU0MpTX98XziH8oUJyfpqGS8Lq5hiC8IcKlbkvIeSe3VOUsDHedo1XauRtSxhMtWuNl4uc6YpLKCcIIfTFr/6grA4I4U8VCl//0IDw9ELCTSnhK61DOnRQGIy+L0ydFw4hZC1QFm8uJ5w7L/QhZK2lQCDMENKzNQhJFSblhEtGwNOWymuC6dek5kWEPUbA0+qJAeGJEfCsQH0kqqTQrzMSntRRr0yXFR5LXearooW6nlVpof9Ovp/KX7DfGBLOf8k8J9aHdztaWng+iqWe5rHc28NunsoL/W5H2GEMIuKF+e03hOfTYl1Us5TYx+8JXyEIIZRf13lhu+m68Oa07ajw5juCm8J46rhwsw8cF9ZuB88uCrvKisgOCjfqFTP3hOHd97sXEM4f21z7935GkqTn1qft9jj+9DzzwnTUs9nssf213Z8uX6FWq9VnvzNdEt/PTQi3/cftysmEcCj4KqOhz+GMW6HLiPAg8fLU/8YGhMmKW6EpIne56NliJPggkoew+PlQ7kFc0TtcWHgkFyEWUNaT9sXHNGOZ/0+X5B/SUkL/IPEOcScLWGpcGov7LE572S+DlBp5D+PH1RyUlRveBzdN3mw2GYxqx0Szs78BkC/1dp6FEy4AAAAASUVORK5CYII="
          alt="files"
        />
        <a
          className="side-link"
          href="https://github.com/lotfijb/vsc_portfolio"
          target="_blank"
        >
          <img
            className="side-image"
            src="https://git-scm.com/images/logos/downloads/Git-Icon-White.png"
            alt="source code"
          />
        </a>
        <a
          className="portrait-container side-link"
          href="https://linktr.ee/lotfijb"
          target="_blank"
        >
          <img
            className="side-image portrait"
            src="https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-6/310741193_1099197280987416_3665341357102155439_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ergtIN6wf_UAX9iLPIH&_nc_ht=scontent.ftun14-1.fna&oh=00_AfB0Ib1krrDFXGHGD8J9voyrnvggw5KB8fg9nmGscvcjNA&oe=63C45E5C"
            alt="lotfi "
          />
        </a>{" "}
      </div>
      <nav className={closed ? "closed" : ""}>
        <ul>
          <li>
            <Link to="/">
              <span>
                <img
                  className="file-image"
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                  alt=""
                />
              </span>
              Overview
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <span>
                <img
                  className="file-image"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                  alt=""
                />
              </span>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/skills">
              <span>
                <img
                  className="file-image"
                  src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
                  alt=""
                />
              </span>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <span>
                <img
                  className="file-image"
                  src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                  alt=""
                />
              </span>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

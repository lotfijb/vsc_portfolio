import "./Topbar.css";
import React from "react";

const Topbar = ({ closed }) => {
  return (
    <div className={closed ? "extended-topbar" : "topbar"}>© Lotfi Jebali</div>
  );
};

export default Topbar;

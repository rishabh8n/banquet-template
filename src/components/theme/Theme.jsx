import React from "react";
import "./Theme.scss";
const Theme = ({ setTheme }) => {
  return (
    <div className="theme-control">
      <button onClick={() => setTheme("theme1")}></button>
      <button onClick={() => setTheme("theme2")}></button>
      <button onClick={() => setTheme("theme3")}></button>
      <button onClick={() => setTheme("theme4")}></button>
      <button onClick={() => setTheme("theme5")}></button>
      <button onClick={() => setTheme("theme6")}></button>
    </div>
  );
};

export default Theme;

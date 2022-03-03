import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="">OMDB Movie</div>
      <div className="">
        {" "}
        ©2022, OMDB Movie, INC. or its affiliates. <b>Develope by </b>{" "}
        <a
          href="https://github.com/mrohitsingh"
          target="_blank"
          rel="noreferrer"
          className="developer"
        >
          Rohit Singh
        </a>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      My River Place {year} &#169;{" "}
      <a href="https://github.com/bedgarone" target="_blank" rel="noreferrer">
        bedgarone
      </a>
    </div>
  );
};

export default Footer;

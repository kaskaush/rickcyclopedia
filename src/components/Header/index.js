import React from "react";

const Header = ({ logo }) => {
  return (
    <div className="header">
      <div className="header__logo">
        <a className="header__logo-link" href="/">
          {logo}
        </a>
      </div>
    </div>
  );
};

export default Header;

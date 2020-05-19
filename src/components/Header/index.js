import React from "react";

const Header = ({ logo }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <a className="header__logo-link" href="/">
          {logo}
        </a>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { string } from "prop-types";

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

Header.propTypes = { logo: string };

export default Header;

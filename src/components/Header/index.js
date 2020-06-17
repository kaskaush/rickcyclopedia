import React from "react";
import { string } from "prop-types";
import { LBL_LOGO } from "../../utility/constants";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <a className="header__logo-link" href="/">
          {LBL_LOGO}
        </a>
      </div>
    </header>
  );
};

Header.propTypes = { logo: string };

export default Header;

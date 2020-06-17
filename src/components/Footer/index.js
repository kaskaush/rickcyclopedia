import React from "react";
import { string } from "prop-types";
import { APP_NAME, GIT_LINK, GIT_NAME } from "../../utility/constants";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content-section">
        <span className="footer__appName">&copy; {APP_NAME}, </span>
        <span>
          <i className="fa fa-github"></i>
          {" "}
          <a
            className="footer__git-link"
            href={GIT_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            {GIT_NAME}
          </a>
        </span>
      </div>
    </div>
  );
};

Footer.propTypes = {
  appName: string,
  gitLink: string,
  gitName: string,
};

export default Footer;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faLinkedin,
    faGitlab,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
        <a href="https://www.linkedin.com/in/shriti-chandra-3949381aa"
            className="linkedin social">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/chandrashritii" className="github social">
            <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://gitlab.com/https://code.videolan.org/Shriti" className="gitlab social">
            <FontAwesomeIcon icon={faGitlab} size="2x" />
        </a>
    </div>
  );
}

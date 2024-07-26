import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <footer className="container container-large">
      <hr className="margin-bottom" />
      <nav className="nav-secondary" id="nav-secondary">
        <ul className="list-inline list-inline-responsive">
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#experience">Experience</a>
            </li>
            <li>
                <a href="#project">Project</a>
            </li>
            <li>
                <a href="#challenge">Challenge</a>
            </li>
        </ul>
        <ul className="list-inline">
            <li>
                <a href="https://www.linkedin.com/in/huilanhsieh/"><LinkedInIcon /></a>
            </li>
            <li>
                <a href="mailto:nancyz1204@gmail.com"><EmailIcon /></a>
            </li>
            <li>
                <a href="https://github.com/huimi"><GitHubIcon /></a>
            </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer;

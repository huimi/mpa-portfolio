import React from 'react';
import Link from 'components/url-shortening/link';
import Logo from 'images/url-shortening/white-logo.svg';

function Footer () {
  return (
    <footer className="footer container">
      <div className="logo">
        <img height="36" alt="logo" src={ Logo } />
      </div>
      <div className="footer-container">
        <div className="content-container">
          <h4>Features</h4>
          <ul>
            <li><Link href="shortening" text="Link Shortening" /></li>
            <li><Link href="branded" text="Branded Links" /></li>
            <li><Link href="analytics" text="Analytics" /></li>
          </ul>
        </div>
        <div className="content-container">
          <h4>Resources</h4>
          <ul>
            <li><Link href="blog" text="Blog" /></li>
            <li><Link href="developers" text="Developers" /></li>
            <li><Link href="support" text="Support" /></li>
          </ul>
        </div>
        <div className="content-container">
          <h4>Company</h4>
          <ul>
            <li><Link href="about" text="About" /></li>
            <li><Link href="team" text="Our Team" /></li>
            <li><Link href="careers" text="Careers" /></li>
            <li><Link href="contact" text="Contact" /></li>
          </ul>
        </div>
      </div>
      <div className="icon-container">
          <Link href="facebook" text={ <span className="icon icon-fb"></span> }/>
          <Link href="twitter" text={ <span className="icon icon-tt"></span> }/>
          <Link href="pinterest" text={ <span className="icon icon-pt"></span> }/>
          <Link href="instagram" text={ <span className="icon icon-ig"></span> }/>
      </div>
    </footer>
  )
}

export default Footer;

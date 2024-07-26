import React, { useState } from 'react';
import Link from 'components/url-shortening/link';
import Button from 'components/url-shortening/button';
import Logo from 'images/url-shortening/logo.svg';
import Menu from 'images/url-shortening/menu.svg';

function MobileMenu () {
  return (
    <div className="mobile-nav-wrap">
      <ul className="mobile-menu">
        <li><Link href="features" text="Features" /></li>
        <li><Link href="pricing" text="Pricing" /></li>
        <li><Link href="resources" text="Resources" /></li>
      </ul>
      <hr />
      <ul className="mobile-menu">
        <li><Link href="login" text="Login" /></li>
        <li><Button text="Sign Up" /></li>
      </ul>
    </div>
  );
}

function Navbar () {
  const [menu, setMenu] = useState(false);
  return (
    <nav>
      <img height="36" alt="Shortly" src={Logo} />
      <div className="nav-wrap">
        <ul className="menu">
          <li><Link href="features" text="Features" /></li>
          <li><Link href="pricing" text="Pricing" /></li>
          <li><Link href="resources" text="Resources" /></li>
        </ul>
        <ul className="menu">
          <li><Link href="login" text="Login" /></li>
          <li><Button text="Sign Up" /></li>
        </ul>
      </div>
      <Button className="hamburger icon-btn"
        text={ <img height="28" alt="menu" src={ Menu } /> }
        onClick={() => setMenu(prevM => !prevM)}
        onBlur={() => setMenu(false)}
      />
      { menu && <MobileMenu /> }
    </nav>
  );
}

export default Navbar;

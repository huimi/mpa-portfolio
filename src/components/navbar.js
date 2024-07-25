import React from 'react';
import * as styles from 'styles/navbar.module.css';

const Navbar = () => {
	return (
		<nav className={ styles.wrapper }> 
			<strong className={ styles.logo }>Huilan Hsieh</strong>
			<div>
				<ul className={ styles.nav }>
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
			</div>
		</nav>
	)
}

export default Navbar;


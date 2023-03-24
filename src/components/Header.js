import React, { useRef, useState, useEffect } from 'react';
import { node, bool } from 'prop-types';
import { Logo } from './Logo';
import { SideMenuX } from './SideMenuX';
import { Close } from '../icons/Close';
import { Menu } from '../icons/Menu';
import { SocialIcons } from './SocialIcons';

/**
 * React Header component.
 * @function
 * Header - Renders a branded Treobytes header component.
 */

export const Header = ({ linksTo }) => {
	const navigation = linksTo.map((link) => (
		<a key={link.id} className='anchor' href={link.href}>
			<li className='list-item'>{link.name.toUpperCase()}</li>
		</a>
	));

	return (
		<>
			<header className='header' data-test-id='header'>
				<div className='container'>
					<Logo />
					<div className='main-nav'>
						<ul className='unordered-list'>
							<div className='is-large'>{navigation}</div>

							<div className='is-small'>
								<SideMenuX
									rightIconClose={
										<Close
											additionalClassName=''
											fill='#000'
											height={50}
											viewBox='0 0 25 25'
											width={50}
										/>
									}
									trigger={
										<Menu
											additionalClassName='action'
											height={50}
											viewBox='0 0 512 512'
											width={50}
										/>
									}
								>
									{navigation}
									<SocialIcons />
								</SideMenuX>
							</div>
						</ul>
					</div>
				</div>
			</header>
		</>
	);
};

Header.propTypes = {
	/**
	 * Include specific navigation component
	 */
	navigation: node,

	/**
	 * Include specific navigation component
	 */
	isAnimated: bool,
};

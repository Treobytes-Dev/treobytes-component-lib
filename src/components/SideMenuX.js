import React, { useState } from 'react';
import { node, string } from 'prop-types';

/**
 * React SideMenu - X component.
 * @function
 * SideMenu - X - Renders a branded Treobytes sidemenu-x axis component.
 */

export const SideMenuX = ({
	componentName,
	leftIconClose,
	rightIconClose,
	children,
	title,
	trigger,
	additionalClassName,
}) => {
	const [style, setStyle] = useState('menu');
	const [menuStatus, setMenuStatus] = useState('open');

	const handleClick = () => {
		switch (menuStatus) {
			case 'open':
				setMenuStatus('close');
				setStyle('active');
				break;

			case 'close':
				setMenuStatus('open');
				setStyle('');
				break;

			default:
				setMenuStatus('open');
				setStyle('');
				break;
		}
	};

	return (
		<div
			className={`${componentName} ${additionalClassName}`}
			data-test-id={`${componentName}`}
		>
			<div className='trigger' data-test-id='trigger' onClick={handleClick}>
				{trigger}
			</div>

			<div
				onClick={handleClick}
				data-test-id={style === 'active' ? `overlay ${style}` : 'overlay'}
				className={style === 'active' ? `overlay ${style}` : 'overlay'}
			/>

			<div
				data-test-id={
					style === 'active' ? `menu menu-x ${style}` : 'menu menu-x'
				}
				className={style === 'active' ? `menu menu-x ${style}` : 'menu menu-x'}
			>
				<div className='wrapper-header'>
					<i
						className='icon-left'
						data-test-id='icon-left'
						onClick={handleClick}
					>
						{leftIconClose}
					</i>

					{title}

					<i
						className='icon-right'
						data-test-id='icon-right'
						onClick={handleClick}
					>
						{rightIconClose}
					</i>
				</div>

				<div className='wrapper-content'>{children}</div>
			</div>
		</div>
	);
};

SideMenuX.propTypes = {
	/**
	 * Optional additional className
	 */
	additionalClassName: string,

	/**
	 * children to populate component's body
	 */
	children: node.isRequired,

	/**
	 * header text
	 */
	title: node,

	/**
	 * content to open side menu
	 */
	trigger: node.isRequired,

	/**
	 * content to close side menu on the left
	 */
	leftIconClose: node,

	/**
	 * content to close side menu on the right
	 */
	rightIconClose: node,
};

SideMenuX.defaultProps = {
	componentName: 'side-menu',
};

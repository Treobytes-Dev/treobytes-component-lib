import React from 'react';
import { string, array } from 'prop-types';
import { Link, BrowserRouter } from 'react-router-dom';

import ScrollHandler from '../utils/ScrollHandler';

/**
 * React Scroll-To component.
 * @function
 * Scroll-To - Renders a branded Treobytes scroll-to component.
 */

const Navigation = ({ positions }) => (
	<>
		{positions.map((num) => (
			<div key={num} className={`nav-${num}`}>
				<Link to={`/#section${num}`} className={`lintTo-${num}`}>
					Section {num}
				</Link>
			</div>
		))}
	</>
);

const Sections = ({ positions }) =>
	positions.map((num) => (
		<div
			className='sections'
			key={num}
			id={`#section${num}`}
			style={{
				width: '100%',
				height: '500px',
			}}
		>
			Section {num}
		</div>
	));

export const ScrollTo = ({
	additionalClassName = '',
	componentName,
	positions,
}) => {
	return (
		<BrowserRouter>
			<div
				className={`${componentName} ${additionalClassName}`}
				data-test-id={componentName}
			>
				<ScrollHandler />
				<Navigation positions={positions} />
				<Sections positions={positions} />
			</div>
		</BrowserRouter>
	);
};

ScrollTo.propTypes = {
	/**
	 * Add an additional className
	 */
	additionalClassName: string,
	/**
	 * Define the number of sections
	 */
	positions: array,
};

ScrollTo.defaultProps = {
	componentName: 'scroll-to',
};

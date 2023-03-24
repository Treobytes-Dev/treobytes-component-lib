import React from 'react';
import { string } from 'prop-types';

/**
 * React Card component.
 * @function
 * Card - Renders a branded Treobytes Card element.
 */

export const Card = ({ children, additionalClassName = '', componentName }) => {
	return (
		<div
			data-test-id={componentName}
			className={`${componentName} ${additionalClassName}`}
		>
			{children}
		</div>
	);
};

Card.propTypes = {
	/**
	 * Button contents
	 */
	children: string.isRequired,

	/**
	 * Add an additional className
	 */
	additionalClassName: string,
};

Card.defaultProps = {
	componentName: 'card',
	onClick: undefined,
};

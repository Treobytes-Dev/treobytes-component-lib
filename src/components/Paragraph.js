import React from 'react';
import { any, string } from 'prop-types';

/**
 * React Paragraph component.
 * @function
 * Paragraph - Renders a branded Treobytes paragraph element.
 */

export const Paragraph = ({ children, additionalClassName = '' }) => {
	return <p className={`paragraph ${additionalClassName}`}>{children}</p>;
};

Paragraph.propTypes = {
	/**
	 * Define children
	 */
	children: any,

	/**
	 * Define an additional className
	 */
	additionalClassName: string,
};

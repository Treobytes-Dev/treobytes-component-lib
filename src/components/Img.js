import React from 'react';
import { string } from 'prop-types';

/**
 * React Image component.
 * @function
 * Image - Renders a branded Treobytes image element.
 */

export const Img = ({ altTag, src, additionalClassName = '' }) => {
	return (
		<img src={src} className={`img ${additionalClassName}`} alt={altTag} />
	);
};

Img.propTypes = {
	/**
	 * Define Alt attribute
	 */
	altTag: string,

	/**
	 * Define src attribute
	 */
	src: string,

	/**
	 * Define an additional className
	 */
	additionalClassName: string,
};

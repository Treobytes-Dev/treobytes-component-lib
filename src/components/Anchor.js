import React from 'react';
import { string, node } from 'prop-types';

/**
 * React Anchor component.
 * @function
 * Anchor - Renders a branded Treobytes anchor element.
 */

export const Anchor = ({
	target,
	href,
	children,
	additionalClassName = '',
	componentName,
	disabled,
	...props
}) => {
	return (
		<a
			target={target}
			href={href}
			data-test-id={componentName}
			type={componentName}
			className={`${componentName} ${additionalClassName}`}
			disabled={disabled}
			{...props}
		>
			{children}
		</a>
	);
};

Anchor.propTypes = {
	/**
	 * Tell the browser where to open link.
	 */
	target: string,

	/**
	 * Tell the browser where to open link.
	 */
	href: string.isRequired,

	/**
	 * Add an additional className
	 */
	additionalClassName: string,

	/**
	 * Anchor contents
	 */
	children: node.isRequired,
};

Anchor.defaultProps = {
	componentName: 'anchor',
};

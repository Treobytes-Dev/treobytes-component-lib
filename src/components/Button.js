import React from 'react';
import { string, func } from 'prop-types';

/**
 * React Button component.
 * @function
 * Button - Renders a branded Treobytes button element.
 */

export const Button = ({
	children,
	componentName,
	disabled,
  applicationSide,
	additionalClassName,
	variant,
	...props
}) => {
	return (
		<button
    className={`${componentName} ${variant}  ${additionalClassName}`}
    data-test-id={componentName}
			disabled={disabled}
			{...props}
		>
			{children}
		</button>
	);
};

Button.propTypes = {
	/**
	 * Button contents
	 */
	children: string.isRequired,

	/**
	 * Button variant color
	 */
	variant: string.isRequired,

	/**
	 * Add an additional className
	 */
	additionalClassName: string,

	/**
	 * Optional click handler
	 */
	onClick: func,
};

Button.defaultProps = {
	componentName: 'button',
  additionalClassName: '',
	onClick: undefined,
};

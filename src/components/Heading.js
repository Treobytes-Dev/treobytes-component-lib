import React from 'react';
import { oneOf, string, node } from 'prop-types';

/**
 * React Heading component.
 * @function
 * Heading - Renders a branded Treobytes heading element.
 */

export const Heading = ({
	variant,
	children,
	additionalClassName = '',
	componentName,
	disabled,
	...props
}) => {
	const TypeHeading = `h${variant}`;
	return (
		<TypeHeading
			data-test-id={componentName}
			className={`${TypeHeading} ${componentName} ${additionalClassName}`}
			{...props}
		>
			{children}
		</TypeHeading>
	);
};

Heading.propTypes = {
	/**
	 * Required for determining size of heading. Options 1 - 6
	 */
	variant: oneOf([1, 2, 3, 4, 5, 6]).isRequired,

	/**
	 * Add an additional className
	 */
	additionalClassName: string,

	/**
	 * Heading contents
	 */
	children: node,
};

Heading.defaultProps = {
	componentName: 'heading',
};

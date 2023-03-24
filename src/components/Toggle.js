import React, { useState } from 'react';
import { node, string } from 'prop-types';

/**
 * React Toggle - Y component.
 * @function
 * Toggle - Renders a utility component to toggle (e.g. turn a item off/on).
 */

export const Toggle = ({
	isOpenChildren,
	isClosedChildren,
	additionalClassName = '',
	componentName,
}) => {
	const [isOpen, setOpen] = useState(false);

	return (
		<>
			<div
				className={`${componentName} ${
					isOpen ? 'open' : ''
				} ${additionalClassName}`}
				data-test-id={componentName}
				onClick={() => setOpen(!isOpen)}
			>
				{isOpen ? isOpenChildren : isClosedChildren}
			</div>
		</>
	);
};

Toggle.propTypes = {
	/**
	 * Add an additional className
	 */
	isOpenChildren: node.isRequired,

	/**
	 * Add an additional className
	 */
	isClosedChildren: node.isRequired,

	/**
	 * Add an additional className
	 */
	additionalClassName: string,
};

Toggle.defaultProps = {
	componentName: 'toggle',
};

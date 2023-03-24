/*eslint-disable no-unused-vars*/
import React, { useState, useRef } from 'react';
import { string, bool } from 'prop-types';

import { Label } from './Label';
import { Error } from './Error';

/**
 * React TextArea component.
 * @function
 * TextArea - Renders a branded Treobytes text-area element.
 */

export const TextArea = ({
	labelFor,
	labelText,
	noLabel = false,
	required,
	validateNotEmpty,
	setName,
	editError = false,
	errorText,
	additionalClassName = '',
	componentName,
	disabled,

	placeHolder,
}) => {
	const [inputValue, setInputValue] = useState('');
	const [error, setError] = useState('');
	const [isFocused, setIsFocused] = useState(false);

	const inputEl = useRef(null);

	const notEmptyValidation = inputValue.length === 0;

	const validationCondition = (condition, text) => {
		if (condition) {
			if (editError === true) {
				setError([`${errorText}`]);
			} else {
				setError([text]);
			}
		}
	};

	const isNotEmpty = () => {
		if (validateNotEmpty === true) {
			validationCondition(notEmptyValidation, `${setName} is required.`);
		}
	};

	const focus = () => {
		setIsFocused(true);
	};

	const blur = () => {
		setIsFocused(false);

		isNotEmpty();
	};

	const onChangeFunc = (event) => {
		setError('');

		//option to have the validation message remain while the user is typing
		// isNotEmpty();

		setInputValue(event.target.value);
	};

	return (
		<div
			className={`${componentName}-wrapper ${additionalClassName}`}
			data-test-id={componentName}
		>
			{noLabel === false ? (
				<>
					<Label labelFor={setName} required={required} labelText={labelText}>
						<textarea
							name={setName}
							title={setName}
							className='text-area'
							data-test-id='text-area'
							type='text'
							value={inputValue}
							onChange={onChangeFunc}
							onFocus={focus}
							onBlur={blur}
							ref={inputEl}
							aria-label={setName}
							style={{ border: error && '1px solid red' }}
							disabled={disabled}
							placeHolder={placeHolder}
						/>
					</Label>
					{error && <Error>{error}</Error>}
				</>
			) : (
				<>
					<textarea
						name={setName}
						title={setName}
						className='text-area'
						data-test-id='text-area'
						type='text'
						value={inputValue}
						onChange={onChangeFunc}
						onFocus={focus}
						onBlur={blur}
						ref={inputEl}
						aria-label={setName}
						style={{ border: error && '1px solid red' }}
						disabled={disabled}
						placeHolder={placeHolder}
					/>

					{error && <Error>{error}</Error>}
				</>
			)}
		</div>
	);
};

TextArea.propTypes = {
	/**
	 * Tell the browser where to open link.
	 */
	setName: string.isRequired,

	/**
	 * Define label's htmlFor
	 */
	labelFor: string,

	/**
	 * Define label's text.
	 */
	labelText: string,

	/**
	 * Define label's htmlFor
	 */
	noLabel: bool,

	/**
	 * Define if the input is required
	 */
	required: bool,

	/**
	 * Choose to validate notEmpty
	 */
	validateNotEmpty: bool,

	/**
	 * Choose to customize a error message
	 */
	editError: bool,

	/**
	 * Customize error text
	 */
	errorText: string,

	/**
	 * Add an additional className
	 */
	additionalClassName: string,

	/**
	 * Define if disabled
	 */
	disabled: bool,

	/**
	 * Define copy for a placeholder
	 */
	placeHolder: string,
};

TextArea.defaultProps = {
	componentName: 'text-area',
};

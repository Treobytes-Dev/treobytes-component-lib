const Modal = ({ componentName,isVisible, setIsVisible, content, closeButton }) => {
	return (
		<div className={componentName} data-testid={componentName}>
			{isVisible ? (
				<div className='modal'>
					{content}
					{closeButton && (
						<button
							className='button edit'
							style={{ width: '100px' }}
							onClick={() => setIsVisible(!isVisible)}
						>
							Close
						</button>
					)}
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

Modal.defaultProps = {
	componentName: 'modal',
	closeButton: true,
};

export default Modal;

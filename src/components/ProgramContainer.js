import { any, array, string } from 'prop-types';

import ImageContainer from './ImageContainer';
import Button from './Button';

const ProgramContainer = ({
	componentName,
	hasIcon,
	programTitle,
	programSubtitle,
	programDescription,
	programFootText,
	btnColor,
	href,
	thumbnails,
	singleImage,
	singleAltTag,
}) => (
	<div className={componentName}>
		<div className='container'>
			<div className='column col-1'>
				<div className='header-wrapper'>
					<h5 className='header header-five'>
						{`${programTitle}`.toUpperCase()}
					</h5>
					<div className='has-icon'>{hasIcon}</div>
				</div>
				{programSubtitle && <p className='paragraph'>{programSubtitle}</p>}

				{programDescription && (
					<p className='paragraph'>{programDescription}</p>
				)}

				{programFootText && <p className='paragraph'>{programFootText}</p>}

				{href && <a href={href} target='_blank' className='btn-wrapper'>
					<Button
						children={`Click to sign up!`.toUpperCase()}
						additionalClass={btnColor}
					/>
				</a>}
			</div>
			<div className='column col-2'>
				<ImageContainer
					singleImage={singleImage}
					thumbnails={thumbnails}
					singleAltTag={singleAltTag}
				/>
			</div>
		</div>
	</div>
);

ProgramContainer.propTypes = {
	/**
	 * Define component name
	 */
	componentName: string,
  hasIcon: any,
	programTitle: string,
	programSubtitle: string,
	programDescription: string,
	programFootText: string,
	btnColor: string,
	href: string,
	thumbnails: array,
	singleImage: string,
	singleAltTag: string
};

ProgramContainer.defaultProps = {
	componentName: 'program-container',
};

export default ProgramContainer;

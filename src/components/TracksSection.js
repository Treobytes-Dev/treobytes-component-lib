import { string } from 'prop-types';

const currentYear = new Date().getFullYear();

const TracksSection = ({ componentName }) => (
	<div className={componentName}>
		<div className='container'>
			<h3 className='header header-three'>{`Tracks ${currentYear}`.toUpperCase()}</h3>
			<h6 className='header header-six'>
				Note:
				<span className='callout'>
					Each track's curriculum will repeat each week
				</span>
			</h6>
		</div>
	</div>
);

TracksSection.propTypes = {
	componentName: string,
};

TracksSection.defaultProps = {
	componentName: 'tracks-section',
};

export default TracksSection;

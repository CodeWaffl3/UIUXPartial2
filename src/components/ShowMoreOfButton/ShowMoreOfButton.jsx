import './ShowMoreOfButton.css'
import PropTypes from 'prop-types';

ShowMoreOfButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};
export default function ShowMoreOfButton({onClick, name}) {
    return (
        <div className='showMoreButton' onClick={onClick}>
            Show More of {name}
        </div>
    );
}

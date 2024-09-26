import paisaje4 from '../assets/img/Paisaje4.jpg';
import PropTypes from 'prop-types';

export const Paisaje4 = ( {className} ) => {
  return (
    <img src={paisaje4} alt="Hermoso" className={className} />
  )
}

Paisaje4.propTypes = {
  className: PropTypes.string
}
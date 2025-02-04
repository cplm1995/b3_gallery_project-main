import paisaje2 from '../assets/img/paisaje2.jpg';
import PropTypes from 'prop-types';

export const Paisaje2 = ( {className} ) => {
  return (
    <img src={paisaje2} alt="Preciosura" className={className} />
  )
}

Paisaje2.propTypes = {
  className: PropTypes.string
}
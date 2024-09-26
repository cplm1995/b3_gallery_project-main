import paisaje6 from '../assets/img/Paisaje6.jpg';
import PropTypes from 'prop-types';

export const Paisaje6 = ( {className} ) => {
  return (
    <img src={paisaje6} alt="Libro N° 1 del Mundo la Biblia" className={className} />
  )
}

Paisaje6.propTypes = {
  className: PropTypes.string
}
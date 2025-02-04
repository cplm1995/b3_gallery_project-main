import paisaje5 from '../assets/img/Paisaje5.jpg';
import PropTypes from 'prop-types';

export const Paisaje5 = ( {className} ) => {
  return (
    <img src={paisaje5} alt="Paisaje de Otoño" className={className} />
  )
}

Paisaje5.propTypes = {
  className: PropTypes.string
}
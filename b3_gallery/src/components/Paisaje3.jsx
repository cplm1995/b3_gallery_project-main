import paisaje3 from '../assets/img/Paisaje3.jpg';
import PropTypes from 'prop-types';

export const Paisaje3 = ( {className} ) => {
  return (
    <img src={paisaje3} alt="Me encanta este paisaje, Hermoso" className={className} />
  )
}

Paisaje3.propTypes = {
  className: PropTypes.string
}
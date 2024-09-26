import {Link} from 'react-router-dom';
import { Paisaje1 } from '../components/Paisaje1';
import { Paisaje2 } from '../components/Paisaje2';
import { Paisaje3 } from '../components/Paisaje3';
import { Paisaje4 } from '../components/Paisaje4';
import { Paisaje5 } from '../components/Paisaje5';
import { Paisaje6 } from '../components/Paisaje6';

export const Navigation = () => {
  return (
    <div className='container thumbnail-container mt-2'>
        <Link to='/paisaje1' className='links'>
            <figure className='thumbnail-image-size'>
                <Paisaje1 />
                <figcaption>Paisaje 1</figcaption>
            </figure>
        </Link>
        <Link to='/paisaje2' className='links'>
            <figure className='thumbnail-image-size'>
                <Paisaje2 />
                <figcaption>Paisaje 2</figcaption>
            </figure>
        </Link>
        <Link to='/paisaje3' className='links'>
            <figure className='thumbnail-image-size'>
                <Paisaje3 />
                <figcaption>Paisaje 3</figcaption>
            </figure>
        </Link>
        <Link to='/paisaje4' className='links'>
            <figure className='thumbnail-image-size'>
                <Paisaje4 />
                <figcaption>Paisaje 4</figcaption>
            </figure>
        </Link>
        <Link to='/paisaje5' className='links'>
            <figure className='thumbnail-image-size'>
                <Paisaje5 />
                <figcaption>Paisaje 5</figcaption>
            </figure>
        </Link>
        <Link to='/paisaje6' className='links'>
            <figure className='thumbnail-image-size'>
                <Paisaje6 />
                <figcaption>Paisaje 6</figcaption>
            </figure>
        </Link>
    </div>
  )
}

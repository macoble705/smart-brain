import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';


const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className='Tilt br2 shadow-2'>
      			<div className='p3'>
        			<img style={{paddingTop: '5px'}} alt='logo' src={brain} />
      			</div>
    		</Tilt>
		</div>
	);
}

export default Logo;